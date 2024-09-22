/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
gsap.registerPlugin(ScrollTrigger);
import * as Three from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeLine } from "../utils/animation";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "Iphone in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      duration: 1.22,
      y: 0,
      scrollTrigger: {
        trigger: "#heading",
      },
    });
  }, []);

  //Camera Control for Model
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //Actual Models
  const small = useRef(new Three.Group());
  const large = useRef(new Three.Group());

  //Rotation of the Models
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const t1 = gsap.timeline();

  useEffect(() => {
    if (size === 'large'){
      animateWithGsapTimeLine(t1, small, smallRotation, "#view1", "#view2", {
        transform : "translateX(-100%)",
        duration : 2,
      } );
    }
    if (size === 'small'){
      animateWithGsapTimeLine(t1, large, largeRotation, "#view2", "#view1", {
        transform : "translateX(0)",
        duration : 2,
      } );
    }
  },[size])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a Closer Look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative mt-5">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationstate={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationstate={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="w-full mx-auto">
            <p className="text-center text-sm font-light mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}

                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
