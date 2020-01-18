import React, { useEffect, useState, useRef } from 'react';
import { FaCommentDots, FaFileAlt, FaClock, FaSearch, FaRegUser, FaRegSmile, FaLink, FaCrop } from "react-icons/fa";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import {TiPin} from "react-icons/ti";
import { MdPhoneInTalk, MdPhone } from "react-icons/md";
// import photo from '../../resources/igSelfie.jpg';
import json from '../../json/line.json';

function LineHome({ root, ...props }) {
    const [message, setMessage] = useState([]);
    const [target, setTarget] = useState(1);
    const main = useRef(null);

    useEffect(() => {
        setMessage(json[target].message);
    }, [target]);

    useEffect(() => {
        main.current.scrollTop = main.current.scrollHeight;
    }, [message]);

    function renderMessage(val, index) {
        switch (val.type) {
            case 'time':
                return (
                    <div key={index} className="date my-3">
                        <div className="date-text">{val.context}</div>
                    </div>
                )
            case 'image':
                return (
                    <div key={index} className={(val.direction ? 'right' : 'left') + ' message d-flex align-items-end'}>
                        <div className="img" style={{ 'backgroundImage': 'url(' + root + val.context + ')' }}></div>
                        {/* <div className="message-time"><time></time></div> */}
                    </div>
                )
            case 'icon':
                return (
                    <div key={index} className={(val.direction ? 'right' : 'left') + ' message d-flex align-items-end sign'}>
                        <div className="content text-center blue">
                            <h5>{val.context === '未接來電' ? <MdPhone /> : <MdPhoneInTalk />}</h5>
                            <span >{val.context}</span>
                        </div>
                    </div>
                )
            default:
                return (
                    <div key={index} className={(val.direction ? 'right' : 'left') + ' message d-flex align-items-end sign'}>
                        <div className="content">
                            {val.context.split("\n").map((innerText, innerIndex) => (
                                <span key={innerIndex}>{innerText}<br /></span>
                            ))}
                        </div>
                    </div>
                )
        }
    }

    function handleClick(index){
        setTarget(index);
    }

    return (
        <div className="layout line-bg home-bg">
            <article className="line-container">
                <nav className="line-bar">
                    <div className="w-33 d-flex justify-content-between p-3">
                        <div className="d-flex align-items-center">
                            <h1>LINE</h1>
                            <h1>&#x25BE;</h1>
                        </div>
                        <div className="d-none d-sm-flex align-items-center">
                            <FaCommentDots />
                            <FaFileAlt />
                            <FaClock />
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="d-flex row bg-white">
                        <div className="col-4 section d-flex flex-column justify-content-between">
                            <div className="bar d-none d-sm-flex align-items-center">
                                <FaSearch />
                                <input placeholder="搜尋聊天室" readOnly />
                                <h2>&#65049;</h2>
                            </div>
                            <section className="box">
                                {
                                    json.map((val, index) => (
                                        <div
                                            key={index}
                                            className={(target === index ? 'focus' : '') + ' friend d-flex justify-content-between align-items-center px-4'}
                                            onClick={()=>handleClick(index)}
                                        >
                                            <div className="img" style={{ 'backgroundImage': 'url(' + root + val.image + ')' }}></div>
                                            {index === 0 && <div className="dot"><TiPin /></div>}
                                            <div className="text d-none d-sm-block ml-2">
                                                <h6>{val.name}</h6>
                                                <p>{val.message[val.message.length - 1].context}</p>
                                            </div>
                                            <div className="note d-none d-sm-flex flex-column align-items-end">
                                                <p className="time">AM 10:02</p>
                                                {/* <p className="number d-flex justify-content-center align-items-center">11</p> */}
                                                <p></p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </section>
                            <div className="icon d-flex justify-content-between py-3 px-4">
                                <FaCommentDots />
                                <FaRegUser />
                                <FiUsers />
                                <FiUserPlus />
                            </div>
                        </div>
                        <div className="col-8 section d-flex flex-column justify-content-between">
                            <div className="bar d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + root + json[target].image + ')' }}></div>
                                    <h6>{json[target].name}</h6>
                                </div>
                                <h2>&#65049;</h2>
                            </div>
                            <section className="box" id="main" ref={main}>
                                {
                                    message.length > 0 &&
                                    message.map((val, index) => {
                                        return renderMessage(val, index)
                                    })
                                }
                            </section>
                            <div className="icon d-flex justify-content-between py-3 px-4">
                                <input placeholder="請輸入訊息。" readOnly />
                                <div className="d-flex right-part align-items-center">
                                    <FaRegSmile />
                                    <FaLink />
                                    <FaCrop />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default LineHome;
