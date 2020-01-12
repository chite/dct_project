import React from 'react';
import { FaCommentDots, FaFileAlt, FaClock, FaSearch, FaUserPlus, FaRegUser, FaLine, FaRegSmile, FaLink, FaCrop } from "react-icons/fa";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import photo from '../../resources/igSelfie.jpg';

function LineHome() {
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
                        <div className="col-4 left-part d-flex flex-column justify-content-between">
                            <div className="search-bar d-none d-sm-flex align-items-center">
                                <FaSearch />
                                <input placeholder="搜尋聊天室" readOnly />
                                <h2>&#65049;</h2>
                            </div>
                            <section className="friends-box">
                                <div className="friend d-flex align-items-center pr-4">
                                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                                    <div className="text ml-2">
                                        <h6>LINE TODAY</h6>
                                        <p>蔡英文發表勝選感言 「持續打造更好國家」</p>
                                    </div>
                                    <div className="note d-flex flex-column align-items-end">
                                        <p className="time">AM 10:02</p>
                                        <p className="number d-flex justify-content-center align-items-center">10</p>
                                    </div>
                                </div>
                            </section>
                            <div className="icon d-flex justify-content-between px-1 py-4">
                                <FaCommentDots />
                                <FaRegUser />
                                <FiUsers />
                                <FiUserPlus />
                            </div>
                        </div>
                        <div className="col-8"></div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default LineHome;
