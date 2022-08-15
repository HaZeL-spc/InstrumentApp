import React, { useState, useEffect, useCallback, useRef } from "react";

const Navbar = () => {
  const [y, setY] = useState(document?.scrollingElement?.scrollHeight);
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

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

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
      </div>
    </div>
  );
};

export default Navbar;
