import { Float, Html } from "@react-three/drei";

type IconItem = {
  src: string;
  pos: [number, number, number];
};

const LEFT_ICONS: IconItem[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    pos: [-2.7, 1.8, -2],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    pos: [-2.8, 0, -2],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    pos: [-2.7, -1.8, -2],
  },
];

const RIGHT_ICONS: IconItem[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    pos: [2.2, 1.8, -2.5],
  },
  {
    src: "https://nodejs.org/static/images/logo.svg",
    pos: [2.3, 0.0, -2.6],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    pos: [2.2, -1.8, -2.5],
  },
];

export const FloatingIcons = () => {
  const all = [...LEFT_ICONS, ...RIGHT_ICONS];

  return (
    <>
      {all.map((item, i) => (
        <Float
          key={i}
          speed={1.8 + i * 0.12}
          rotationIntensity={0.5}
          floatIntensity={1.6}
        >
          <Html
            position={item.pos}
            transform
            center
            occlude={false}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={item.src}
              alt="tech-icon"
              style={{
                width: "15px",
                height: "15px",
                objectFit: "contain",
                opacity: 0.9,
                filter:
                  "drop-shadow(0 0 8px rgba(124,58,237,0.4)) drop-shadow(0 0 6px rgba(21,128,61,0.3))",
              }}
            />
          </Html>
        </Float>
      ))}
    </>
  );
};
