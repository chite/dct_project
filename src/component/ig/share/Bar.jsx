import React from 'react';
import {FaInstagram, FaRegCompass, FaRegHeart,FaRegUser} from "react-icons/fa";
import igIcon from '../../../resources/igIcon2.PNG';

function Bar() {
    return (
        <div className="ig-bar position-relative bg-white w-100">
            <div className="bar-left d-inline-flex flex-row align-items-center">
                <FaInstagram/>
                <div className="b-left ml-2"></div>
                <div className="bar-img"  style={{ 'backgroundImage': 'url(' + igIcon + ')' }}></div>
            </div>
            <div className="bar-middle d-inline-flex flex-row align-items-center">
                <input className="form-control bg-light bar-input px-5" placeholder="&#x2315; 搜尋" readOnly/>
            </div>
            <div  className="bar-right d-inline-flex flex-row align-items-center">
                <FaRegCompass/>
                <FaRegHeart />
                <FaRegUser />
            </div>
        </div>
    )
}

export default Bar;
