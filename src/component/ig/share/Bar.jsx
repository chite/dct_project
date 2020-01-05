import React, { useState, useEffect } from 'react';
import { FaInstagram, FaRegCompass, FaRegHeart, FaRegUser } from "react-icons/fa";
import igIcon from '../../../resources/igIcon2.PNG';

function Bar() {
    const [moveState, setMove] = useState(false);
    useEffect(() => {
        function handleScroll(){
            if (window.pageYOffset) {
                setMove(true);
            } else {
                setMove(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={(moveState ? "short " : "") + "ig-bar bg-white w-100"}>
            <div className="bar-left d-inline-flex flex-row align-items-center">
                <FaInstagram />
                <div className="b-left ml-2"></div>
                <div className={(moveState ? "short " : "") + "bar-img"} style={{ 'backgroundImage': 'url(' + igIcon + ')' }}></div>
            </div>
            <div className="bar-middle d-inline-flex flex-row align-items-center">
                <input className="form-control bg-light bar-input px-5" placeholder="&#x2315; 搜尋" readOnly />
            </div>
            <div className="bar-right d-inline-flex flex-row align-items-center">
                <FaRegCompass />
                <FaRegHeart />
                <FaRegUser />
            </div>
        </div>
    )
}

export default Bar;
