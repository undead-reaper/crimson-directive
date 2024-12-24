import { useRef, useState } from "react";

interface BentoTiltProps {
  className?: string;
  children: React.ReactNode;
}

const BentoTilt = (props: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  const hanelMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`${props.className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={hanelMouseLeave}
      style={{ transform: transformStyle }}
    >
      {props.children}
    </div>
  );
};

export default BentoTilt;
