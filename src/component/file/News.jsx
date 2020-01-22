import React from 'react';
import photo from '../../resources/newImages.jpg';
import { IoIosClose } from "react-icons/io";

function News({ handleClose, data }) {
    return (
        <div className="news-wrapper">
            <div className="bar">
                <h6>新聞閱讀器</h6>
                <h6 onClick={handleClose}>
                    <IoIosClose />
                </h6>
            </div>
            <article className="main bg-white mx-auto w-75 px-5 py-4">
                <h1>{data.title}</h1>
                <div className="img-container">
                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                    <div className="alt">
                        <h5>圖片取自免費圖庫</h5>
                    </div>
                </div>
                <time>{data.time}</time>
                {
                    data.content.split('\n').map((val,index)=>(
                    <p key={index}>{val}</p>
                    ))
                }
            </article>
        </div>
    )
}

export default News;
