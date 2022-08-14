import React, { ChangeEvent, MouseEventHandler } from 'react';

const Navbar = () => {
    const handleMouseEnterText = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        const target = e.target as HTMLTextAreaElement;
        const nextElement = target.nextElementSibling
        const previousElement = target.previousElementSibling;
        nextElement?.classList.add("text-hovered")
        previousElement?.classList.add("text-hovered")
        // target.classList.add("text-hovered")
    }

    const handleMouseLeaveText = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent> ) => {
        const target = e.target as HTMLTextAreaElement;
        const nextElement = target.nextElementSibling
        const previousElement = target.previousElementSibling;
        nextElement?.classList.remove("text-hovered")
        previousElement?.classList.remove("text-hovered")
    }

    return (
        <div className='navbar'>
            <div className='navbar-logo'><h1>INSTRUMENT</h1></div>
            <div className='navbar-subsites'>
                <div className='subsite-text-container'>
                    <h3>{"["}</h3>
                    <h2 className='subsites-text' onMouseEnter={handleMouseEnterText} onMouseLeave={handleMouseLeaveText} >WHAT WE DO</h2>
                    <h3>{"]"}</h3>
                </div>
                <div className='subsite-text-container'>
                    <h3>{"["}</h3>
                    <h2 className='subsites-text' onMouseEnter={handleMouseEnterText} onMouseLeave={handleMouseLeaveText} >WHO WE ARE</h2>
                    <h3>{"]"}</h3>
                </div >
                <div className='subsite-text-container'>
                    <h3>{"["}</h3>
                    <h2 className='subsites-text' onMouseEnter={handleMouseEnterText} onMouseLeave={handleMouseLeaveText} >BEING HERE</h2>
                    <h3>{"]"}</h3>
                </div>
                <div className='subsite-text-container'>
                    <h3>{"["}</h3>
                    <h2 className='subsites-text' onMouseEnter={handleMouseEnterText} onMouseLeave={handleMouseLeaveText} >CAREERS</h2>
                    <h3>{"]"}</h3>
                </div>
            </div>
        </div>
    );
};

export default Navbar;