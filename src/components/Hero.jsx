import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      duration: 2,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      duration: 2,
      y : -50,
    });
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-col flex-center">
        <p className="hero-title">Iphone 15 pro</p>
        <div className=" md:w-5/6  w-3/4">
          <video
            key={videoSrc}
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy Now
        </a>
        <p>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
