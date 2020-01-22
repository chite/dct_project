import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight, FaRegHeart, FaRegPaperPlane, FaRegComment, FaRegBookmark } from "react-icons/fa";

function Post({ data, root, ...props }) {
    const [post, setPost] = useState([]);
    useEffect(() => {
        setPost(data['post' + props.igState]);
    }, []);
    return (
        post.length &&
        <>
            <div className="dark-view" onClick={props.close}>
            </div>
            <button className="d-none d-sm-block closes" onClick={props.close}>&times;</button>
            <div className="dark-box d-flex">
                <button className={(props.spec - 1 < 0 ? "invisible " : "visible ") + "d-none d-md-block mr-3"} onClick={() => props.turnPage(props.spec - 1)}><FaAngleLeft /></button>
                <div className="post-container row">
                    <div className="image col-12 col-md-8" style={{ 'backgroundImage': 'url(' + (root + post[props.spec].pt[0]) + ')' }}></div>
                    <div className="d-none d-md-flex flex-column justify-content-between col-md-4">
                        <div className="post-bar d-flex justify-content-between align-items-center py-3">
                            <div className="d-flex align-items-center">
                                <div className="image-border d-flex justify-content-center align-items-center">
                                    <div className="image" style={{ 'backgroundImage': 'url(' + (root + post[props.spec].selfPt) + ')' }}></div>
                                </div>
                                <h6 className="ml-2">pikachu111</h6>
                            </div>
                            <h3 className="text-secondary">&#183;&#183;&#183;</h3>
                        </div>
                        <div className="context py-3">
                            <div className="row">
                                <div className="col-2">
                                    <div className="image-border d-flex justify-content-center align-items-center">
                                        <div className="image" style={{ 'backgroundImage': 'url(' + (root + post[props.spec].selfPt) + ')' }}></div>
                                    </div>
                                </div>
                                <div className="col-9 pl-1 ml-2">
                                    <h6>pikachu111<span className="ml-2 reg-text">{post[props.spec].context}</span></h6>
                                    <h6 className="time">{post[props.spec].time}</h6>
                                </div>
                            </div>
                            {
                                post[props.spec].message.map((val, index) => (
                                    <div className="row" key={index}>
                                        <div className="col-2">
                                            <div className="image-border d-flex justify-content-center align-items-center">
                                                <div className="image" style={{ 'backgroundImage': 'url(' + (root + val.selfPt) + ')' }}></div>
                                            </div>
                                        </div>
                                        <div className="col-9 pl-1 ml-2 mt-2">
                                            <div className="d-flex justify-content-between">
                                                <h6>{val.author}<span className="ml-2 reg-text">{val.context}</span></h6>
                                                <FaRegHeart />
                                            </div>
                                            <h6 className="time mt-3">{val.time}&nbsp;&nbsp;&nbsp;<strong>回覆</strong></h6>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="sign d-flex justify-content-between align-items-center py-2">
                            <div className="d-flex align-items-start">
                                <FaRegHeart />
                                <FaRegComment />
                                <FaRegPaperPlane />
                            </div>
                            <FaRegBookmark />
                        </div>
                        <div className="like d-flex align-items-center">
                            <div className="like-image mr-1" style={{ 'backgroundImage': 'url(' + (root + post[props.spec].like_pt) + ')' }}></div>
                            &nbsp;<strong>{post[props.spec].like_author}</strong>&nbsp;和&nbsp;<strong>其他{post[props.spec].like - 1}人</strong>&nbsp;都說讚
                        </div>
                        <p className="time m-0">{post[props.spec].time}前</p>
                        <div className="message">
                            <div className="leave-message d-flex justify-content-between p-3">
                                <span>留言……</span><span className="text-primary">發佈</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={(props.spec + 1 >= post.length ? "invisible " : "visible ") + "d-none d-md-block ml-3"} onClick={() => props.turnPage(props.spec + 1)}><FaAngleRight /></button>
            </div>
        </>
    )
}

export default Post;
