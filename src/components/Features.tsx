import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import BentoTilt from "./BentoTilt";

const Features = () => {
  return (
    <section id="features" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Lead the charge, defy the odds.
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            In a world torn by chaos, every trigger pulled shapes your destiny.
            Fight, adapt, and survive against impossible odds.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                World-Building <b>C</b>ampaign
              </>
            }
            description="A story-driven campaign with missions set in key global locations, each with different challenges and objectives."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  D<b>y</b>namic Battlefield
                </>
              }
              description="The environment changes in real-time with destructible objects, weather effects, and evolving terrain, impacting strategy."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  Asymmetric <b>M</b>ultiplayer
                </>
              }
              description="One team defends against apocalyptic forces while the other seeks to sabotage world-saving efforts in intense multiplayer matches."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  <b>H</b>eroic Abilities
                </>
              }
              description="Each character has unique abilities, like airstrikes or medical drones, adding tactical depth to gameplay."
            />
          </BentoTilt>
          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font min-w-64 text-black">M<b>o</b>re coming s<b>o</b>on!</h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
          <div className="bento-tilt_2">
              <video src="/videos/feature-5.mp4" loop muted autoPlay className="size-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
