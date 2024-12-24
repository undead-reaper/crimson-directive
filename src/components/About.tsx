import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100dvw",
      height: "100dvh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Crimson Detective
        </p>
        <AnimatedTitle title="Pre<b>c</b>ision and survival <br /> in a war-t<b>o</b>rn future." className="mt-5 !text-black text-center" />
        <div className="about-subtext">
          <p>
            Step into a high-stakes battlefield where every decision shapes your
            fate. Engage in intense firefights and uncover a world shrouded in
            chaos and secrets.
          </p>
          <p className="text-gray-500">Crimson Directive: Command the chaos, conquer the battlefield.</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src={"/images/about.webp"}
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
