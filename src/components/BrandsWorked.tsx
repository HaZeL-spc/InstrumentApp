import React, { useEffect, useState, useRef } from "react";
import AdidasIcon from "../images/icons/AdidasIcon.png";
import FacebookIcon from "../images/icons/FacebookIcon.png";
import GoogleIcon from "../images/icons/GoogleIcon.png";
import HBOIcon from "../images/icons/HBOIcon.png";
import LinkedinIcon from "../images/icons/LinkedinIcon.png";
import NetflixIcon from "../images/icons/NetflixIcon.png";
import NikeIcon from "../images/icons/NikeIcon.png";
import PradaIcon from "../images/icons/PradaIcon.png";
import PumaIcon from "../images/icons/PumaIcon.png";
import SpotifyIcon from "../images/icons/SpotifyIcon.png";
import VisualStudioIcon from "../images/icons/VisualStudioIcon.png";
import XboxIcon from "../images/icons/XboxIcon.png";

const firstIcons = [AdidasIcon, HBOIcon, LinkedinIcon, NetflixIcon];
const secondIcons = [FacebookIcon, NikeIcon, PradaIcon, PumaIcon];
const thirdIcons = [GoogleIcon, SpotifyIcon, VisualStudioIcon, XboxIcon];

const BrandsWorked = () => {
  //   const [index, setIndex] = useState(0);
  const firstDiv = useRef<any>(null);
  const secondDiv = useRef<any>(null);
  const thirdDiv = useRef<any>(null);
  const fourthDiv = useRef<any>(null);

  useEffect(() => {
    changeIcons();
  }, []);

  const changeClassNames = (
    nextRef: React.MutableRefObject<any>,
    previousRef: React.MutableRefObject<any>
  ) => {
    if (nextRef.current && previousRef.current) {
      const nextElements = nextRef.current.children;
      const previousElements = previousRef.current.children;

      //   for (let i = 0; i < nextElements.length; i++) {
      //     setTimeout(() => {
      //       nextElements[i].classList.remove("unshow");
      //       nextElements[i].classList.add("show");
      //       previousElements[i].classList.remove("show");
      //       previousElements[i].classList.add("unshow");
      //     }, 500);
      //   }

      nextElements[0].classList.remove("unshow");
      nextElements[0].classList.add("show");
      previousElements[0].classList.remove("show");
      previousElements[0].classList.add("unshow");

      setTimeout(() => {
        nextElements[1].classList.remove("unshow");
        nextElements[1].classList.add("show");
        previousElements[1].classList.remove("show");
        previousElements[1].classList.add("unshow");
      }, 100);

      setTimeout(() => {
        nextElements[2].classList.remove("unshow");
        nextElements[2].classList.add("show");
        previousElements[2].classList.remove("show");
        previousElements[2].classList.add("unshow");
      }, 200);
    }
  };

  const changeIcons = () => {
    let index = 0;
    setInterval(() => {
      switch (index) {
        case 0:
          changeClassNames(firstDiv, fourthDiv);
          break;
        case 1:
          changeClassNames(secondDiv, firstDiv);
          break;
        case 2:
          changeClassNames(thirdDiv, secondDiv);
          break;
        default:
          changeClassNames(fourthDiv, thirdDiv);
          break;
      }
      index = (index + 1) % 4;
    }, 2500);
  };

  return (
    <div className="brands-icon-slider">
      <div className="brand-icon-container" ref={firstDiv}>
        <img src={firstIcons[0]} className="brand-icon show"></img>
        <img src={secondIcons[0]} className="brand-icon show"></img>
        <img src={thirdIcons[0]} className="brand-icon show"></img>
      </div>
      <div className="brand-icon-container" ref={secondDiv}>
        <img src={firstIcons[1]} className="brand-icon unshow"></img>
        <img src={secondIcons[1]} className="brand-icon unshow"></img>
        <img src={thirdIcons[1]} className="brand-icon unshow"></img>
      </div>
      <div className="brand-icon-container" ref={thirdDiv}>
        <img src={firstIcons[2]} className="brand-icon unshow"></img>
        <img src={secondIcons[2]} className="brand-icon unshow"></img>
        <img src={thirdIcons[2]} className="brand-icon unshow"></img>
      </div>
      <div className="brand-icon-container" ref={fourthDiv}>
        <img src={firstIcons[3]} className="brand-icon unshow"></img>
        <img src={secondIcons[3]} className="brand-icon unshow"></img>
        <img src={thirdIcons[3]} className="brand-icon unshow"></img>
      </div>
    </div>
  );
};

export default BrandsWorked;
