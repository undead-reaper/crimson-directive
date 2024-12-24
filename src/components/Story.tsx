import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseEvents = () => {

    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-geneal text-sm uppercase md:tex-[10px]">
          Last Stand: Global Salvation
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="The Final B<b>a</b>ttle <br /> for Earth's Futu<b>r</b>e"
            className="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/images/entrance.webp"
                  alt="Entrance"
                  className="object-contain"
                  onMouseLeave={handleMouseEvents}
                  onMouseUp={handleMouseEvents}
                  onMouseEnter={handleMouseEvents}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
                <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                Elite soldiers must stop an apocalyptic force threatening humanity's survival. In a final stand across war-torn landscapes, they fight to save the world from destruction.
                </p>
                <Button id="realm-button" label="Discover Prologue" className="mt-5" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
