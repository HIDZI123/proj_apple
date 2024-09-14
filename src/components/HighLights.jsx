import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
gsap.registerPlugin(ScrollTrigger);

const HighLights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      duration: 1.3,
      translateY: 0,
      scrollTrigger: {
        trigger: "#title",
      },
    });

    gsap.to(".link", {
      opacity: 1,
      duration: 1.3,
      translateY: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".link",
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full bg-zinc common-padding"
    >
      <div className="screen-max-width">
        <div className="mb-12 flex w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the HighLights
          </h1>

          <div className="flex flex-wrap items-end gap-5 mt-6">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the Event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default HighLights;
