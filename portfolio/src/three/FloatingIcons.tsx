import { Float, Html } from "@react-three/drei";

type IconItem = {
  src: string;
  pos: [number, number, number];
};

const LEFT_ICONS: IconItem[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    pos: [-3.3, 1.8, -2],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    pos: [-3.4, 0, -2],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    pos: [-3.2, -1.8, -2],
  },
];

const RIGHT_ICONS: IconItem[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    pos: [3.3, 1.8, -2],
  },
  {
    src: "https://nodejs.org/static/images/logo.svg",
    pos: [3.4, 0.0, -2],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    pos: [3.2, -1.8, -2],
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
          rotationIntensity={0.3}
          floatIntensity={1.2}
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
              }}
            />
          </Html>
        </Float>
      ))}
    </>
  );
};
