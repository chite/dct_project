import React, { useEffect, useState, useRef } from 'react';
import { FaCommentDots, FaFileAlt, FaClock, FaSearch, FaRegUser, FaRegSmile, FaLink, FaCrop } from "react-icons/fa";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import photo from '../../resources/igSelfie.jpg';
import json from '../../json/line.json';

function LineHome({ root, ...props }) {
    const [message, setMessage] = useState([]);
    const [target, setTarget] = useState("羅璟宸");
    const main = useRef(null);
    useEffect(() => {
        setMessage(json[target].message);
    }, []);
    useEffect(() => {
        main.current.scrollTop = main.current.scrollHeight;
    }, [message]);
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
                                <div className="friend d-flex justify-content-between align-items-center px-4">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <div className="text d-none d-sm-block ml-2">
                                        <h6>LINE TODAY</h6>
                                        <p>蔡英文發表勝選感言 「持續打造更好國家」</p>
                                    </div>
                                    <div className="note d-none d-sm-flex flex-column align-items-end">
                                        <p className="time">AM 10:02</p>
                                        <p className="number d-flex justify-content-center align-items-center">11</p>
                                    </div>
                                </div>

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
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <h6>LINE TODAY</h6>
                                </div>
                                <h2>&#65049;</h2>
                            </div>
                            <section className="box" id="main" ref={main}>
                                {
                                    message.length > 0 &&
                                    message.map((val, index) => (
                                        val.type === 'time' ?
                                            <div key={index} className="date my-3">
                                                <div className="date-text">{val.context}</div>
                                            </div>
                                            : (val.type === 'image' ?
                                                <div key={index} className={(val.direction ? 'right' : 'left') + ' message d-flex align-items-end'}>
                                                    <div className="img" style={{ 'backgroundImage': 'url(' + root + val.context + ')' }}></div>
                                                    {/* <div className="message-time">
                                                        <time></time>
                                                    </div> */}
                                                </div>
                                                :
                                                <div key={index} className={(val.direction ? 'right' : 'left') + ' message d-flex align-items-end sign'}>
                                                    <div className="content">
                                                        {val.context.split("\n").map((innerText, innerIndex) => (
                                                            <span key={innerIndex}>{innerText}<br/></span>
                                                        ))}
                                                    </div>
                                                    {/* <div className="message-time">
                                                        <time></time>
                                                    </div> */}
                                                </div>
                                            )
                                    ))
                                }
                                {/* <div className="date my-3">
                                    <div className="date-text">1.12（Sun）</div>
                                </div>
                                <div className="message d-flex align-items-end left sign">
                                    <div className="content">
                                        <span>蔡英文壓勝連任 日本5大報頭版伺候 雙殺韓國瑜 最快5月罷韓對決 注意保暖！ 北台灣轉涼高溫僅18度 海面一片血紅 292隻海龜集體死亡 開口要加薪好難？ 五技巧與叮嚀看這裡</span>
                                    </div>
                                    <div className="message-time">
                                        <time>AM 10:02</time>
                                    </div>
                                </div>
                                <div className="message d-flex align-items-end right sign">
                                    <div className="message-time">
                                        <time>AM 10:02</time>
                                    </div>
                                    <div className="content">
                                        <span>蔡英文壓勝連任</span>
                                    </div>
                                </div>
                                <div className="message d-flex align-items-end left">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <div className="message-time">
                                        <time>AM 10:02</time>
                                    </div>
                                </div>
                                <div className="message d-flex align-items-end left">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <div className="message-time">
                                        <time>AM 10:02</time>
                                    </div>
                                </div>
                                <div className="message d-flex align-items-end left">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <div className="message-time">
                                        <time>AM 10:02</time>
                                    </div>
                                </div>
                                <div className="message d-flex align-items-end left">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <div className="message-time">
                                        <time>AM 10:02</time>
                                    </div>
                                </div>
                                <div className="message d-flex align-items-end left">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <div className="message-time">
                                        <time>AM 10:02</time>
                                    </div>
                                </div>
                                <div className="message d-flex align-items-end left">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <div className="message-time">
                                        <time>AM 10:02</time>
                                    </div>
                                </div> */}
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
