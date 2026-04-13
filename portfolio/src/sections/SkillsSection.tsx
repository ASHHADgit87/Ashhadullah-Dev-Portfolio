import { useRef, useEffect, useMemo, useState } from "react";
import { useInView } from "framer-motion";
import * as THREE from "three";
import { SKILLS } from "@/lib/constants";

const GROUPS = [
  {
    id: "Languages",
    label: "Languages",
    color: 0x00ffb2,
    hex: "#00FFB2",
    emissive: 0x004433,
  },
  {
    id: "Frontend",
    label: "Frontend",
    color: 0x60cfff,
    hex: "#60cfff",
    emissive: 0x003055,
  },
  {
    id: "Backend",
    label: "Backend",
    color: 0xc084ff,
    hex: "#c084ff",
    emissive: 0x2d0055,
  },
  {
    id: "DB",
    label: "Database",
    color: 0xffb060,
    hex: "#ffb060",
    emissive: 0x442200,
  },
  {
    id: "AI",
    label: "AI",
    color: 0xff6099,
    hex: "#ff6099",
    emissive: 0x440022,
  },
] as const;

const getPhong = (m: THREE.Mesh) => m.material as THREE.MeshPhongMaterial;
const getBasic = (m: THREE.Mesh) => m.material as THREE.MeshBasicMaterial;
const getSprite = (s: THREE.Sprite) => s.material as THREE.SpriteMaterial;

interface OrbData {
  mesh: THREE.Mesh;
  glow: THREE.Sprite;
  ring: THREE.Mesh;
  ring2: THREE.Mesh;
  label: THREE.Sprite;
  targetPos: THREE.Vector3;
  orbitAngle: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitTilt: number;
  rotSpeed: THREE.Vector3;
  floatPhase: number;
  floatAmp: number;
  delay: number;
  progress: number;
  groupIdx: number;
  skillName: string;
  skillPct: number;
  skillLevel: string;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  name: string;
  level: string;
  pct: number;
  hex: string;
}

function makeLabel(text: string, hex: string): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 64;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, 256, 64);
  ctx.font = "bold 22px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = hex;
  ctx.globalAlpha = 0.95;
  ctx.fillText(text, 128, 32);
  return new THREE.CanvasTexture(c);
}

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    name: "",
    level: "",
    pct: 0,
    hex: "#00FFB2",
  });

  const layout = useMemo(() => {
    const xPositions = [-6.2, -3.1, 0, 3.1, 6.2];
    return GROUPS.map((g, gi) => ({
      ...g,
      skills: SKILLS.filter((s) => s.group === g.id),
      cx: xPositions[gi],
    }));
  }, []);

  useEffect(() => {
    if (!inView || !canvasRef.current) return;
    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x080b10, 1);
    renderer.shadowMap.enabled = false;
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080b10, 0.035);

    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.offsetWidth / canvas.offsetHeight,
      0.1,
      120,
    );
    camera.position.set(0, 1.5, 14);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    const sun = new THREE.DirectionalLight(0xffffff, 0.7);
    sun.position.set(6, 8, 10);
    scene.add(sun);

    const groupLights = layout.map((g) => {
      const pl = new THREE.PointLight(g.color, 1.8, 8);
      pl.position.set(g.cx, 0, 0);
      scene.add(pl);
      return pl;
    });

    const geos = [
      new THREE.IcosahedronGeometry(0.28, 2),
      new THREE.OctahedronGeometry(0.3, 1),
      new THREE.DodecahedronGeometry(0.26, 0),
      new THREE.TetrahedronGeometry(0.32, 2),
      new THREE.SphereGeometry(0.25, 16, 12),
    ];

    const orbs: OrbData[] = [];
    const labelTextures: THREE.CanvasTexture[] = [];

    layout.forEach((g, gi) => {
      const n = g.skills.length;

      g.skills.forEach((skill, si) => {
        const phi = Math.acos(1 - (2 * (si + 0.5)) / n);
        const theta = si * 2.399963;

        const R = 1.55;
        const tx = g.cx + R * Math.sin(phi) * Math.cos(theta);
        const ty = R * Math.cos(phi);
        const tz = R * Math.sin(phi) * Math.sin(theta);

        const mat = new THREE.MeshPhongMaterial({
          color: g.color,
          emissive: g.emissive,
          emissiveIntensity: 0,
          shininess: 160,
          transparent: true,
          opacity: 0,
        });
        const mesh = new THREE.Mesh(geos[(gi * 3 + si) % geos.length], mat);
        mesh.position.set(tx, ty - 14, tz);
        scene.add(mesh);
        const glowMat = new THREE.SpriteMaterial({
          color: g.color,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const glow = new THREE.Sprite(glowMat);
        glow.scale.set(1.1, 1.1, 1.1);
        mesh.add(glow);

        const pct = skill.percentage / 100;
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.42 * pct, 0.014, 8, 64),
          new THREE.MeshBasicMaterial({
            color: g.color,
            transparent: true,
            opacity: 0,
          }),
        );
        ring.rotation.x = Math.PI / 2;
        mesh.add(ring);

        const ring2 = new THREE.Mesh(
          new THREE.TorusGeometry(0.38 * pct, 0.01, 8, 64),
          new THREE.MeshBasicMaterial({
            color: g.color,
            transparent: true,
            opacity: 0,
          }),
        );
        ring2.rotation.y = Math.PI / 2;
        mesh.add(ring2);

        const tex = makeLabel(skill.name, g.hex);
        labelTextures.push(tex);
        const label = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: tex,
            transparent: true,
            opacity: 0,
            depthWrite: false,
          }),
        );
        label.scale.set(1.8, 0.45, 1);
        label.position.set(0, 0.55, 0);
        mesh.add(label);

        orbs.push({
          mesh,
          glow,
          ring,
          ring2,
          label,
          targetPos: new THREE.Vector3(tx, ty, tz),
          orbitAngle: theta,
          orbitRadius: R,
          orbitSpeed: 0.18 + Math.random() * 0.14,
          orbitTilt: phi,
          rotSpeed: new THREE.Vector3(
            (Math.random() - 0.5) * 0.9,
            (Math.random() - 0.5) * 1.2,
            (Math.random() - 0.5) * 0.6,
          ),
          floatPhase: Math.random() * Math.PI * 2,
          floatAmp: 0.06 + Math.random() * 0.06,
          delay: gi * 0.18 + si * 0.1,
          progress: 0,
          groupIdx: gi,
          skillName: skill.name,
          skillPct: skill.percentage,
          skillLevel: skill.level,
        });
      });
    });

    const constellationLines: THREE.Line[] = [];
    GROUPS.forEach((g, gi) => {
      const go = orbs.filter((o) => o.groupIdx === gi);
      go.forEach((o, i) => {
        const next = go[(i + 1) % go.length];
        const geo = new THREE.BufferGeometry().setFromPoints([
          o.mesh.position.clone(),
          next.mesh.position.clone(),
        ]);
        const line = new THREE.Line(
          geo,
          new THREE.LineBasicMaterial({
            color: g.color,
            transparent: true,
            opacity: 0,
            depthWrite: false,
          }),
        );
        scene.add(line);
        constellationLines.push(line);
      });
    });

    const starCount = 1800;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 60;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPos, 3),
    );
    scene.add(
      new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({
          color: 0xffffff,
          size: 0.06,
          transparent: true,
          opacity: 0.35,
        }),
      ),
    );
    layout.forEach((g) => {
      const eq = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.008, 8, 96),
        new THREE.MeshBasicMaterial({
          color: g.color,
          transparent: true,
          opacity: 0.07,
          depthWrite: false,
        }),
      );
      eq.rotation.x = Math.PI / 2;
      eq.position.set(g.cx, 0, 0);
      scene.add(eq);

      const vr = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.006, 8, 96),
        new THREE.MeshBasicMaterial({
          color: g.color,
          transparent: true,
          opacity: 0.05,
          depthWrite: false,
        }),
      );
      vr.position.set(g.cx, 0, 0);
      scene.add(vr);
    });
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let lastDragX = 0;
    let lastDragY = 0;
    let dragVelX = 0;
    let dragVelY = 0;
    let autoRotate = true;
    let cameraTheta = 0;
    let cameraPhi = 0.1;

    const mouse2D = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    raycaster.params.Sprite = { threshold: 0.3 };

    const meshToOrb = new Map<THREE.Object3D, OrbData>(
      orbs.map((o) => [o.mesh, o]),
    );
    let hoveredOrb: OrbData | null = null;

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouseY = -((e.clientY - r.top) / r.height) * 2 + 1;
      mouse2D.set(mouseX, mouseY);

      if (isDragging) {
        dragVelX = (e.clientX - lastDragX) * 0.005;
        dragVelY = (e.clientY - lastDragY) * 0.003;
        cameraTheta += dragVelX;
        cameraPhi = Math.max(-0.6, Math.min(0.8, cameraPhi + dragVelY));
        lastDragX = e.clientX;
        lastDragY = e.clientY;
        autoRotate = false;
      }

      raycaster.setFromCamera(mouse2D, camera);
      const hits = raycaster.intersectObjects(orbs.map((o) => o.mesh));
      const prev = hoveredOrb;
      hoveredOrb = hits.length ? (meshToOrb.get(hits[0].object) ?? null) : null;
      canvas.style.cursor = hoveredOrb ? "pointer" : "grab";

      if (hoveredOrb) {
        const hp = hits[0].object.position.clone().project(camera);
        const rect = canvas.getBoundingClientRect();
        setTooltip({
          visible: true,
          x: (hp.x * 0.5 + 0.5) * rect.width,
          y: (-hp.y * 0.5 + 0.5) * rect.height - 52,
          name: hoveredOrb.skillName,
          level: hoveredOrb.skillLevel,
          pct: hoveredOrb.skillPct,
          hex: layout[hoveredOrb.groupIdx].hex,
        });
      } else if (prev && !hoveredOrb) {
        setTooltip((t) => ({ ...t, visible: false }));
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastDragX = e.clientX;
      lastDragY = e.clientY;
      canvas.style.cursor = "grabbing";
    };

    const onMouseUp = () => {
      isDragging = false;
      canvas.style.cursor = hoveredOrb ? "pointer" : "grab";
      setTimeout(() => {
        autoRotate = true;
      }, 3000);
    };

    const onWheel = (e: WheelEvent) => {
      camera.position.z = Math.max(
        7,
        Math.min(22, camera.position.z + e.deltaY * 0.012),
      );
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);
    canvas.addEventListener("wheel", onWheel, { passive: true });
    const clock = new THREE.Clock();
    let animId: number;
    const tv = new THREE.Vector3();
    const HOVER_SCL = new THREE.Vector3(1.55, 1.55, 1.55);
    const REST_SCL = new THREE.Vector3(1.0, 1.0, 1.0);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (autoRotate) cameraTheta += 0.0025;
      if (!isDragging) {
        dragVelX *= 0.92;
        dragVelY *= 0.92;
        cameraTheta += dragVelX;
        cameraPhi = Math.max(-0.6, Math.min(0.8, cameraPhi + dragVelY));
      }
      const camR = camera.position.z;
      camera.position.x = camR * 0.55 * Math.sin(cameraTheta);
      camera.position.y = camR * 0.4 * Math.sin(cameraPhi) + 1.5;
      camera.lookAt(0, 0.5, 0);

      groupLights.forEach((pl, gi) => {
        pl.intensity = 1.4 + Math.sin(t * 1.1 + gi * 1.3) * 0.6;
      });

      orbs.forEach((orb) => {
        const mat = getPhong(orb.mesh);

        const gMat = getSprite(orb.glow);
        const rMat = getBasic(orb.ring);
        const r2Mat = getBasic(orb.ring2);
        const lMat = getSprite(orb.label);
        if (t > orb.delay) {
          orb.progress = Math.min(1, orb.progress + 0.02);
          const ease = 1 - Math.pow(1 - orb.progress, 4);

          orb.mesh.position.y =
            orb.targetPos.y * ease + (orb.targetPos.y - 14) * (1 - ease);
          orb.mesh.position.x = orb.targetPos.x;
          orb.mesh.position.z = orb.targetPos.z;

          mat.opacity = ease * 0.92;
          gMat.opacity = ease * 0.22;
          rMat.opacity = ease * 0.45;
          r2Mat.opacity = ease * 0.3;
          lMat.opacity = 0;
        }

        orb.mesh.position.y +=
          Math.sin(t * orb.orbitSpeed + orb.floatPhase) * orb.floatAmp * 0.016;

        orb.mesh.rotation.x += orb.rotSpeed.x * 0.01;
        orb.mesh.rotation.y += orb.rotSpeed.y * 0.014;
        orb.mesh.rotation.z += orb.rotSpeed.z * 0.008;

        orb.ring.rotation.z += 0.007;
        orb.ring2.rotation.x += 0.009;
        const isHovered = hoveredOrb === orb;
        tv.copy(isHovered ? HOVER_SCL : REST_SCL);
        orb.mesh.scale.lerp(tv, 0.12);
        mat.emissiveIntensity = isHovered ? 0.75 : 0;
        gMat.opacity = isHovered ? 0.55 : orb.progress * 0.22;
        lMat.opacity = isHovered ? 0.95 : 0;
        rMat.opacity = isHovered ? 0.85 : orb.progress * 0.45;
        r2Mat.opacity = isHovered ? 0.7 : orb.progress * 0.3;
      });
      let li = 0;
      GROUPS.forEach((_g, gi) => {
        const go = orbs.filter((o) => o.groupIdx === gi);
        go.forEach((o, i) => {
          const next = go[(i + 1) % go.length];
          const line = constellationLines[li++];
          if (!line) return;
          line.geometry.setFromPoints([
            o.mesh.position.clone(),
            next.mesh.position.clone(),
          ]);
          const avgP =
            (getPhong(o.mesh).opacity + getPhong(next.mesh).opacity) / 2;
          (line.material as THREE.LineBasicMaterial).opacity = avgP * 0.12;
        });
      });

      renderer.render(scene, camera);
    };

    animate();
    const onResize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseUp);
      canvas.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geos.forEach((g) => g.dispose());
      labelTextures.forEach((t) => t.dispose());
    };
  }, [inView, layout]);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-[#00FFB2] text-xs font-mono tracking-[0.2em] uppercase">
            Capabilities
          </span>
          <h2 className="text-4xl font-bold text-white">Skills</h2>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          {GROUPS.map((g) => (
            <span
              key={g.id}
              className="flex items-center gap-2 text-xs text-white/50"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: g.hex, boxShadow: `0 0 6px ${g.hex}99` }}
              />
              {g.label}
            </span>
          ))}
          <span className="ml-auto text-white/20 text-xs hidden md:block font-mono">
            drag · scroll · hover
          </span>
        </div>
        <div
          className="relative rounded-2xl overflow-hidden border border-white/5"
          style={{ height: 580 }}
        >
          <canvas ref={canvasRef} className="w-full h-full" />

          {tooltip.visible && (
            <div
              className="absolute pointer-events-none z-10 px-3 py-2 rounded-xl border text-xs font-mono"
              style={{
                left: tooltip.x,
                top: tooltip.y,
                transform: "translate(-50%, -100%)",
                background: "rgba(8,11,16,0.92)",
                borderColor: `${tooltip.hex}55`,
                color: tooltip.hex,
                boxShadow: `0 0 16px ${tooltip.hex}33`,
                backdropFilter: "blur(8px)",
                minWidth: "130px",
                textAlign: "center",
              }}
            >
              <div
                className="font-bold text-sm mb-0.5"
                style={{ color: "#fff" }}
              >
                {tooltip.name}
              </div>
              <div style={{ color: tooltip.hex }}>{tooltip.level}</div>
              <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${tooltip.pct}%`, background: tooltip.hex }}
                />
              </div>
              <div className="mt-0.5 text-white/30">{tooltip.pct}%</div>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 flex justify-around pb-4 pointer-events-none">
            {GROUPS.map((g) => (
              <span
                key={g.id}
                className="text-[10px] font-mono tracking-[0.15em]"
                style={{ color: g.hex, opacity: 0.6 }}
              >
                {g.label.toUpperCase()}
              </span>
            ))}
          </div>

          <div className="absolute top-4 right-4 text-white/15 text-xs font-mono pointer-events-none">
            ⟳ drag to orbit
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {layout.map((g) => (
            <div key={g.id} className="flex flex-col gap-3">
              <h3
                className="text-[10px] font-mono uppercase tracking-widest pb-1 border-b"
                style={{ color: g.hex, borderColor: `${g.hex}28` }}
              >
                {g.label}
              </h3>
              {g.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/55">{skill.name}</span>
                    <span className="text-white/20 font-mono">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-px w-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000"
                      style={{
                        width: inView ? `${skill.percentage}%` : "0%",
                        background: g.hex,
                        boxShadow: `0 0 4px ${g.hex}55`,
                        transitionDelay: `${GROUPS.findIndex((x) => x.id === g.id) * 0.12}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
