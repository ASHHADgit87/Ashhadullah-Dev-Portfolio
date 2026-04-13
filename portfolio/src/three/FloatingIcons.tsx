import { Float, Html } from "@react-three/drei";
import { useEffect, useState } from "react";

type IconItem = {
  src: string;
  basePos: [number, number, number];
};

const ICONS: IconItem[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    basePos: [-2.2, 1.6, -2],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    basePos: [-2.1, 0, -2],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    basePos: [-2.2, -1.6, -2],
  },

  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    basePos: [2, 1.6, -2.5],
  },
  {
    src: "https://nodejs.org/static/images/logo.svg",
    basePos: [2.1, 0.0, -2.6],
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    basePos: [2, -1.6, -2.5],
  },
];

export const FloatingIcons = () => {
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;

      if (width < 900) setScaleFactor(0.6);
      else if (width < 1200) setScaleFactor(0.75);
      else if (width < 1500) setScaleFactor(0.9);
      else setScaleFactor(1);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      {ICONS.map((item, i) => {
        const pos = item.basePos.map((v) => v * scaleFactor) as [
          number,
          number,
          number,
        ];

        return (
          <Float
            key={i}
            speed={1.6 + i * 0.1}
            rotationIntensity={0.4}
            floatIntensity={1.4}
          >
            <Html
              position={pos}
              transform
              center
              occlude={false}
              style={{ pointerEvents: "none" }}
            >
              <img
                src={item.src}
                alt="tech-icon"
                style={{
                  width: `${14 * scaleFactor}px`,
                  height: `${14 * scaleFactor}px`,
                  objectFit: "contain",
                  opacity: 0.9,
                  filter:
                    "drop-shadow(0 0 8px rgba(124,58,237,0.4)) drop-shadow(0 0 6px rgba(21,128,61,0.3))",
                }}
              />
            </Html>
          </Float>
        );
      })}
    </>
  );
};
