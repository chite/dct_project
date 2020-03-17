import React, { useState, useEffect } from 'react';
import Bar from './share/Bar';
import igSelfie from '../../resources/igSelfie.jpg';
import igSelfie2 from '../../resources/igSelfie2.jpg';
import igPhoto from '../../resources/igPost.JPG';
import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import data from '../../json/ig.json';

function Post(props) {
    const [show, setShow] = useState([false]);
    const [moveState, setMove] = useState(false);
    const [igState, setState] = useState(1);

    const handleClick = (index) => {
        let newShow = [...show];
        newShow[index] = true;
        setShow(newShow);
    }

    useEffect(() => {
        document.title = '杜沐安 • Instagram 相片與影片';
        document.getElementsByTagName('link')[0].href = props.root + '/ig/shortcuticon.png';

        function handleScroll() {
            if (window.pageYOffset) {
                setMove(true);
            } else {
                setMove(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        let state = localStorage.getItem('igState');
        if (!Number(state)) {
            //如果是小帳
            let checkValid = localStorage.getItem('igValid');
            if (checkValid === 'true') {
                setState(0);
            }
        }
        let newShowArray = new Array(24).fill(false);
        setShow(newShowArray);
        return;
    }, []);

    return (
        <div className="layout ig-bg">
            <Bar />
            <article className="home-layout mb-5">
                <div className="row pt-70">
                    <div className="col-12 col-sm-8 post-area">
                        {
                            data['post' + igState].map((val, index) => (
                                <div key={index} className="post-container bg-white w-100 mx-auto">
                                    <nav className="post-bar p-3">
                                        <div className="d-flex justify-content-between w-100">
                                            <div className="d-flex justify-content-between">
                                                <div className="image" style={{ 'backgroundImage': 'url(' + props.root + data.userProfilePt[igState] + ')' }}></div>
                                                <div className="ml-3 d-flex align-items-center">
                                                    <h6>{data.userAccount[igState]}</h6>
                                                    {/* <h6>{val.title}</h6> */}
                                                </div>
                                            </div>
                                            <h2 className="text-secondary">&#183;&#183;&#183;</h2>
                                        </div>
                                    </nav>
                                    <div className="post-photo" style={{ 'backgroundImage': 'url(' + (props.root + val.pt[0]) + ')' }}></div>
                                    <div className="sign d-flex justify-content-between px-3 mt-2">
                                        <div className=" d-flex">
                                            <FaRegHeart />
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                    <FaRegComment />
                                        </div>
                                        <FaRegBookmark />
                                    </div>
                                    <p className="text px-3 mt-2 d-flex align-items-center">

                                        {
                                            (val.like_author === '') ?
                                                <span>{val.like}&nbsp;個讚</span>
                                                : <>
                                                    <span className="d-inline-block image" style={{ 'backgroundImage': 'url(' + (props.root + val.like_pt) + ')' }}></span>
                                                    &nbsp;
                                                    <strong>{val.like_author}</strong>
                                                    &nbsp;和&nbsp;
                                                    <strong>其他&nbsp;{val.like - 1}&nbsp;人</strong>
                                                    &nbsp;都說讚
                                                </>
                                        }
                                    </p>
                                    <div className="text">
                                        <p className={show[index] ? "" : "hide"} onClick={() => handleClick(index)}>
                                            <strong>{data.userAccount[igState]} </strong>
                                            {
                                                val.context.split('\n').map((text, indexElement) => (
                                                    <span key={indexElement}>{text}<br /></span>
                                                ))
                                            }
                                        </p>
                                    </div>
                                    <div className="text">
                                        {val.message.map((message, messageIndex) => (
                                            <p key={messageIndex}>&nbsp;<strong>{message.author}</strong>&nbsp;{message.context}</p>
                                        ))}
                                    </div>
                                    <h6 className="time">{val.time}</h6>
                                    <div className="leave-message d-flex justify-content-between p-3">
                                        <span>留言……</span><span className="text-primary">發佈</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={(moveState ? "moving " : "") + "side-part d-none d-sm-block col-sm-4"}>
                        <div className="user d-flex align-items-center" onClick={() => props.history.push('/ig/home')}>
                            <div className="image" style={{ 'backgroundImage': 'url(' + props.root + data.userProfilePt[igState] + ')' }}></div>
                            <div className="ml-2">
                                <h6>{data.userAccount[igState]}</h6>
                                <p>杜沐安</p>
                            </div>
                        </div>
                        <section className="section mt-3 bg-white pt-3 pl-3">
                            <div className="section-bar d-flex justify-content-between pr-3">
                                <h6>限時動態</h6>
                                <h6>全部觀看</h6>
                            </div>
                            <div className="friend-list">
                                {
                                    data.story.map((val, index) => (
                                        <div className="friends" key={index}>
                                            <div className="d-flex">
                                                <div className="image-border">
                                                    <div className="image" style={{ 'backgroundImage': 'url(' + props.root + val.selfPt + ')' }}></div>
                                                </div>
                                                <div className="ml-2">
                                                    <div>
                                                        <h6>{val.title}</h6>
                                                        <p>{val.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                        <section className="section mt-3 bg-white pt-3 px-3">
                            <div className="section-bar d-flex justify-content-between">
                                <h6>推薦用戶</h6>
                                <h6>查看全部</h6>
                            </div>
                            {
                                data.recommend.map((val, index) => (
                                    <div className="friends" key={index}>
                                        <div className="d-flex">
                                            <div className="image-border">
                                                <div className="image" style={{ 'backgroundImage': 'url(' + props.root + val.selfPt + ')' }}></div>
                                            </div>
                                            <div className="ml-2">
                                                <div>
                                                    <h6>{val.title}</h6>
                                                    <p>為你推薦</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="text-primary"><strong>追蹤</strong></h6>
                                    </div>
                                ))
                            }
                        </section>
                        <div className="about mt-3">
                            關於我們&nbsp;&middot;&nbsp;支援&nbsp;&middot;&nbsp;新聞稿&nbsp;&middot;&nbsp;API&nbsp;&middot;&nbsp;工作機會&nbsp;&middot;&nbsp;隱私&nbsp;&middot;&nbsp;使用條款&nbsp;&middot;&nbsp;目錄&nbsp;&middot;&nbsp;個人檔案&nbsp;&middot;&nbsp;主題標籤&nbsp;&middot;&nbsp;語言
                            <br />© 2020 INSTAGRAM
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Post;
