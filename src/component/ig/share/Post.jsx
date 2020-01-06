import React from 'react';
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import photo from '../../../resources/igPhoto.jpg';

function Post() {
    return (
        <>
            <div className="dark-view">
            </div>
            <button className="d-none d-sm-block closes">&times;</button>
            <div className="dark-box d-flex">
                <button className="d-none d-sm-block"><FaAngleLeft /></button>
                <div className="post-container">
                    <div className="col-12 col-sm-8 image"  style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                    <div className="d-none d-sm-block col-sm-4"></div>
                </div>
                <button className="d-none d-sm-block"><FaAngleRight /></button>
            </div>
        </>
    )
}

export default Post;
