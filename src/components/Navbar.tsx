import React, { useState, useEffect, useCallback, useRef, ReactEventHandler } from "react";
import "../css/Navbar.css"
import useWindowDimensions from "../hooks/useWindowsDimensions";

const Navbar = () => {
  const [y, setY] = useState(document?.scrollingElement?.scrollHeight);
  const [slideActive, setSlideActive] = useState(false)
  const { height, width } = useWindowDimensions();
  const navbarMdRef = useRef<null | HTMLDivElement>(null)

  const navbarRef = React.useRef<HTMLDivElement>(null);
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

  const handleNavigation = useCallback(() => {
    if ((y as number) > window.scrollY) {
      if (navbarRef.current) {
        navbarRef.current.style.top = "0px";
      }
    } else if ((y as number) < window.scrollY) {
      if (navbarRef.current) {
        navbarRef.current.style.top = "-100px";
      }
    }
    setY(window.scrollY);
  }, [y]);

  const handleClick = (e : any) => {
    if (!navbarMdRef.current?.contains(e.target)) {
        console.log("outside")
        console.log(slideActive)
        if (slideActive) {
            setSlideActive(false)
            navbarMdRef.current!.style.width = "0px";
        }
      }
      else {
        console.log("inside")
      }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation, slideActive]);


  const activateNavbarMD = () => {
    navbarMdRef.current!.style.width = "200px"
    setSlideActive(true)
  }

  const changeNavigate = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const element = e.target as HTMLHeadingElement;
    const text = element.innerHTML.toLowerCase() as string
    console.log()
    const elementToScroll = document.getElementById(text.replace(/ /g,"-")) as HTMLElement
    elementToScroll.scrollIntoView()
    // window.scrollBy(0, -50);
    setSlideActive(false)
    navbarMdRef.current!.style.width = "0px"

  }


  if (width > 768) {
    return (
      <div className="navbar" ref={navbarRef}>
        <div className="navbar-logo">
          <h1>INSTRUMENT</h1>
        </div>
        <div className="navbar-subsites">
          <div className="subsite-text-container">
            <h3>{"["}</h3>
            <h2
              className="subsites-text"
              onMouseEnter={handleMouseEnterText}
              onMouseLeave={handleMouseLeaveText}
              onClick={changeNavigate}
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
              onClick={changeNavigate}
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
              onClick={changeNavigate}
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
              onClick={changeNavigate}
            >
              CAREERS
            </h2>
            <h3>{"]"}</h3>
          </div>
        </div>
      </div>
    );
  
  }

  return (
  <div className="navbar-md">
        <div className="navbar-logo">
          <h1>INSTRUMENT</h1>
        </div>
        <div className="icon-menu-div">
        <button className="bar-container" onClick={activateNavbarMD}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </div>
      <div className="slide-nav" ref={navbarMdRef} id="slideNav">
        {/* <div>text 1</div>
        <div style={{color:"white"}}>text 1</div>
        <div>text 1</div>
        <div>text 1</div> */}
      <div className="navbar-subsites change-flex">
          <div className="subsite-text-container">
            <h3>{"["}</h3>
            <h2
              className="subsites-text"
              onMouseEnter={handleMouseEnterText}
              onMouseLeave={handleMouseLeaveText}
              onClick={changeNavigate}
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
              onClick={changeNavigate}
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
              onClick={changeNavigate}
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
              onClick={changeNavigate}
            >
              CAREERS
            </h2>
            <h3>{"]"}</h3>
          </div>
        </div>
      </div>
  </div>
  )
};

export default Navbar;
