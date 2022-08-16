import React from "react";
import instagramFooterIcon from "../images/icons/instagramFooterIcon.png";
import linkedinFooterIcon from "../images/icons/linkedinFooterIcon.png";
import twitterFooterIcon from "../images/icons/twitterFooterIcon.png";

const Footer = () => {
  const handleMouseEnterText = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    const target = e.target as HTMLTextAreaElement;
    const nextElement = target.nextElementSibling;
    const previousElement = target.previousElementSibling;
    nextElement?.classList.add("text-hovered");
    previousElement?.classList.add("text-hovered");
    // target.classList.add("text-hovered")
  };

  const handleMouseLeaveText = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    const target = e.target as HTMLTextAreaElement;
    const nextElement = target.nextElementSibling;
    const previousElement = target.previousElementSibling;
    nextElement?.classList.remove("text-hovered");
    previousElement?.classList.remove("text-hovered");
  };
  return (
    <div className="footer-div">
      <div className="navbar-subsites">
        <div className="subsite-text-container">
          <h3 className="text-hovered">{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            HOME
          </h2>
          <h3 className="text-hovered">{"]"}</h3>
        </div>
        <div className="subsite-text-container">
          <h3>{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            WHAT WE DO
          </h2>
          <h3>{"]"}</h3>
        </div>
        <div className="subsite-text-container">
          <h3>{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            WORK
          </h2>
          <h3>{"]"}</h3>
        </div>
        <div className="subsite-text-container">
          <h3>{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            WHO WE ARE
          </h2>
          <h3>{"]"}</h3>
        </div>
        <div className="subsite-text-container">
          <h3>{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            ARTICLES
          </h2>
          <h3>{"]"}</h3>
        </div>
        <div className="subsite-text-container">
          <h3>{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            BEING HERE
          </h2>
          <h3>{"]"}</h3>
        </div>
        <div className="subsite-text-container">
          <h3>{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            CAREERS
          </h2>
          <h3>{"]"}</h3>
        </div>
        <div className="subsite-text-container">
          <h3>{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            CONTACT
          </h2>
          <h3>{"]"}</h3>
        </div>
        <div className="subsite-text-container">
          <h3>{"["}</h3>
          <h2
            className="subsites-text"
            onMouseEnter={handleMouseEnterText}
            onMouseLeave={handleMouseLeaveText}
          >
            PRIVACY
          </h2>
          <h3>{"]"}</h3>
        </div>
      </div>
      <div className="media-part">
        <button className="footer-button">Newsletter</button>
        <img src={instagramFooterIcon} className="footer-img"></img>
        <img src={linkedinFooterIcon} className="footer-img"></img>
        <img src={twitterFooterIcon} className="footer-img"></img>
      </div>
    </div>
  );
};

export default Footer;
