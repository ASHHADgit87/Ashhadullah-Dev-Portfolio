import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { useCursorStore } from "@/store/cursorStore";
import * as THREE from "three";

export const Avatar = () => {
  const { scene, animations } = useGLTF("/avatar.glb");

  const group = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Object3D | null>(null);

  const { x, y } = useCursorStore();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!animations || animations.length === 0) return;

    animations.forEach((clip) => {
      clip.tracks = clip.tracks.filter(
        (track) => !track.name.toLowerCase().includes("head"),
      );
    });
  }, [animations]);

  useEffect(() => {
    if (!actions) return;

    const first = Object.values(actions)[0];
    if (!first) return;

    Object.values(actions).forEach((a) => a?.stop());
    first.reset().fadeIn(0.5).play();
  }, [actions]);

  useEffect(() => {
    scene.traverse((child) => {
      const name = child.name.toLowerCase();

      if (name === "head" || (name.includes("head") && !headRef.current)) {
        headRef.current = child;
      }

      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          mesh.material = (mesh.material as THREE.MeshStandardMaterial).clone();
          (mesh.material as THREE.MeshStandardMaterial).metalness = 0.3;
          (mesh.material as THREE.MeshStandardMaterial).roughness = 0.6;
        }
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (!headRef.current) return;

    const rawY = (x - 0.5) * 1.5;
    const rawX = -y * 0.8;

    const targetY = THREE.MathUtils.clamp(rawY, -0.8, 0.8);
    const targetX = THREE.MathUtils.clamp(rawX, -0.5, 0.5);

    const targetEuler = new THREE.Euler(targetX, targetY, 0, "XYZ");
    const targetQuat = new THREE.Quaternion().setFromEuler(targetEuler);

    headRef.current.quaternion.slerp(targetQuat, 10 * delta);
  });

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={2.8}
        position={[0.1, -3.15, 0]}
        rotation={[0, 0.56, 0]}
      />
    </group>
  );
};

useGLTF.preload("/avatar.glb");
