import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { animateGsapWithScroll } from "../utils/animation";

const Chips = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateGsapWithScroll(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="Chip" height={180} width={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 pro Chip.
            <br />A Huge win for Monster Gaming.
          </h2>
          <p className="hiw-subtitle">
            Its Here, the biggest redesign in Apple GPUs.{" "}
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative flex-center h-full">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Frame"
                className="bg-transparent z-10 relative "
              />
            </div>
            <div className="hiw-video">
              <video
                ref={videoRef}
                className=" pointer-events-none"
                playsInline
                autoPlay
                muted
                preload="none"
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray font-semibold text-center mt-3 mb-15">
            Honkai : Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chips;
