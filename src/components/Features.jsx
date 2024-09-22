import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { animateGsapWithScroll } from "../utils/animation";

import { useRef } from "react";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    animateGsapWithScroll("#features_title", { y: 0, opacity: 1, duration: 2 });
    animateGsapWithScroll(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateGsapWithScroll(".g_text", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power1",
    });

    gsap.to('#exploreVideo', {
        scrollTrigger:{
            trigger:'#exploreVideo',
            toggleActions: 'play pause reverse restart',
            start: '-10% bottom'
        },
        onComplete:() => {
            videoRef.current.play()
        }
    })
  }, []);

  return (
    <section className="common-padding relative bg-zinc overflow-hidden h-full ">
      <div className="screen-width">
        <div className="mb-12 w-full">
          <h1 className="section-heading" id="features_title">
            Explore the full story
          </h1>
        </div>

        <div className="flex flex-col overflow-hidden justify-center items-center">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Iphone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in Titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="w-full h-[50vh] relative flex items-center ">
              <video
                autoPlay
                muted
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col relative w-full">
              <div className="feature-video-container">
                <div className="flex-1 overflow-hidden h-[50vh] ">
                  <img
                    src={explore1Img}
                    alt="Titanium"
                    className="feature-video g_grow "
                  />
                </div>
                <div className="flex-1 overflow-hidden h-[50vh] ">
                  <img
                    src={explore2Img}
                    alt="Titanium2"
                    className="feature-video g_grow "
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Iphone 15 pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design,
                    </span>
                    {" "}using the same metal alloy that spaceship used during mission
                    to Mars
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratio of any other metal making these our {" "}
                    <span className="text-white">
                     lightest pro model ever 
                    </span>
                    {" "}You will notice the differnce when you pick one up!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
