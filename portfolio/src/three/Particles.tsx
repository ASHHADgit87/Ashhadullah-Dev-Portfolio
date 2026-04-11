import { Sparkles } from "@react-three/drei";

export const Particles = () => (
  <>
    <Sparkles
      count={300}
      scale={[12, 6, 20]}
      size={1.8}
      speed={0.5}
      color="#00FFB2"
      opacity={2}
    />

    <Sparkles
      count={120}
      scale={[10, 5, 18]}
      size={2.5}
      speed={0.8}
      color="#ffffff"
      opacity={0.15}
    />
  </>
);
