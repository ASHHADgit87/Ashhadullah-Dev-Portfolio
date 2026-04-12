import { Sparkles } from "@react-three/drei";

export const Particles = () => (
  <>
    <Sparkles
      count={220}
      scale={[14, 7, 18]}
      size={2.2}
      speed={0.8}
      color="#7C3AED"
      opacity={1.2}
      position={[0, 0, -2]}
    />

    <Sparkles
      count={160}
      scale={[12, 6, 16]}
      size={2}
      speed={1.1}
      color="#15803D"
      opacity={0.9}
      position={[0, 0, -3]}
    />

    <Sparkles
      count={90}
      scale={[10, 5, 14]}
      size={2.4}
      speed={0.9}
      color="#ffffff"
      opacity={0.15}
      position={[0, 0, -4]}
    />
  </>
);
