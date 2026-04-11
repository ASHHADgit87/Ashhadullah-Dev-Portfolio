import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Float } from "@react-three/drei";
import { Avatar } from "@/three/Avatar";
import { Particles } from "@/three/Particles";
import { FloatingIcons } from "@/three/FloatingIcons";

interface HeroSceneProps {
  isMobile: boolean;
}

export const HeroScene = ({ isMobile }: HeroSceneProps) => {
  if (isMobile) return null;

  return (
    <Canvas
      camera={{
        position: [0, 0.5, 7.5],
        fov: 38,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[2, 3, 2]}
          intensity={1.2}
          color="#ffffff"
        />
        <pointLight position={[-2, 2, 2]} intensity={0.5} color="#00FFB2" />

        <Environment preset="city" />

        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.15}>
          <Avatar />
        </Float>

        <Particles />
        <FloatingIcons />
      </Suspense>
    </Canvas>
  );
};
