import React, { useState, useEffect } from 'react';
import Bar from './share/Bar';
import Post from './share/Post';
import Logout from './share/Logout';
import { IoMdGrid } from "react-icons/io";
import { FaRegUserCircle, FaHeart, FaComment, FaRegBookmark } from "react-icons/fa";
import { DiAptana } from "react-icons/di";
import { FiTv } from "react-icons/fi";
// import selfPt from '../../resources/igSelfie.jpg';
import data from '../../json/ig.json';

function Home(props) {
    const [open, setOpen] = useState(0);
    const [igState, setState] = useState(1);
    const [logOut, setlogOut] = useState(false);    //顯示登出

    useEffect(() => {
        document.title = '杜沐安 • Instagram 相片與影片';
        document.getElementsByTagName('link')[0].href = props.root + '/ig/shortcuticon.png';

        let state = localStorage.getItem('igState');
        if (!Number(state)) {
            //如果是小帳
            let checkValid = localStorage.getItem('igValid');
            if (checkValid === 'true') {
                setState(0);
            }
        }
    }, []);
    const handleClick = (index) => {
        console.log(index)
        if (index < 0 || index >= data['post' + igState].length) return;
        setOpen(index + 1);
        let body = document.querySelector('body').style;
        body.height = '100%';
        body.overflow = 'hidden';
    }
    const logoutOpen = () => {
        setlogOut(true);
        let body = document.querySelector('body').style;
        body.height = '100%';
        body.overflow = 'hidden';
    }
    const handleClose = () => {
        setOpen(0);
        setlogOut(false);
        let body = document.querySelector('body').style;
        body.height = '';
        body.overflow = 'auto';
    }
    return (
        Boolean(data['post' + igState].length) &&
        <div className="layout ig-bg">
            <Bar />
            {
                Boolean(open) &&
                <Post
                    close={handleClose}
                    data={data}
                    igState={igState}
                    root={props.root}
                    spec={open - 1}
                    turnPage={handleClick}
                />
            }
            {
                logOut && <Logout close={handleClose} />
            }
            <article className="home-layout mb-5">
                <div className="d-flex justify-content-between align-items-start pt-5">
                    <div className="self-photo" >
                        <div className="photo-container mx-auto">
                            <div className="photo" style={{ 'backgroundImage': 'url(' + props.root + data.userProfilePt[igState] + ')' }}></div>
                        </div>
                    </div>
                    <div className="document">
                        <div className="d-flex flex-direction-row">
                            <h1>{data.userAccount[igState]}</h1>
                            <button className="d-none d-sm-block btn btn-outline-secondary btn-sm ml-3" disabled>編輯個人檔案</button>
                            &nbsp;&nbsp;
                            <div onClick={logoutOpen}>
                                <DiAptana />
                            </div>
                        </div>
                        <button className="d-block d-sm-none btn btn-outline-secondary btn-sm w-75 mt-4" disabled>編輯個人檔案</button>
                        <div className=" flex-direction-row mt-4 d-none d-sm-flex">
                            <h6>{data['post' + igState].length} 貼文</h6>
                            <h6 className="ml-4">{data.userIntro[igState].followers} 位追蹤者</h6>
                            <h6 className="ml-4">{data.userIntro[igState].followings} 追蹤中</h6>
                        </div>
                        <div className="d-none d-sm-block pre-line">
                            <p>{data.userIntro[igState].introduction}</p>
                        </div>
                    </div>
                </div>
                <div className="ml-3 mt-3 d-sm-none pre-line">
                    <p>{data.userIntro[igState].introduction}</p>
                </div>
                {/* <div className="history w-100">
                    <div className="history-container">
                        <div className="photo-container">
                            <div className="bg history-photo" style={{ 'backgroundImage': 'url(' + selfPt + ')' }}></div>
                        </div>
                        <h6>AAAAAAAAAAAAAAAA</h6>
                    </div>
                    <div className="history-container">
                        <div className="photo-container">
                            <div className="bg history-photo" style={{ 'backgroundImage': 'url(' + selfPt + ')' }}></div>
                        </div>
                        <h6>AAAAAAAAAAAAAAAA</h6>
                    </div>
                    <div className="history-container">
                        <div className="photo-container">
                            <div className="bg history-photo" style={{ 'backgroundImage': 'url(' + selfPt + ')' }}></div>
                        </div>
                        <h6>AAAAAAAAAAAAAAAA</h6>
                    </div>
                </div> */}
                <div className="s-follow flex-direction-row justify-content-around d-flex d-sm-none">
                    <h6 className="text-center"><span>{data['post' + igState].length}</span><br />貼文</h6>
                    <h6 className="ml-4 text-center"><span>{data.userIntro[igState].followers}</span><br />位追蹤者</h6>
                    <h6 className="ml-4 text-center"><span>{data.userIntro[igState].followings}</span><br />追蹤中</h6>
                </div>
                <div className="post-banner d-flex justify-content-center">
                    <div className="mx-4">
                        <IoMdGrid />
                        <span>&nbsp;貼文</span>
                    </div>
                    <div className="mx-4">
                        <FiTv />
                        <span>&nbsp;IGTV</span>
                    </div>
                    <div className="mx-4">
                        <FaRegBookmark />
                        <span>&nbsp;我的珍藏</span>
                    </div>
                    <div className="mx-4">
                        <FaRegUserCircle />
                        <span>&nbsp;已標註</span>
                    </div>
                </div>
                <div className="cards">
                    {
                        data['post' + igState].map((val, index) => (
                            <div key={ val.pt[0]+index} className="card-element" onClick={() => handleClick(index)}>
                                <div className="bg" style={{ 'backgroundImage': 'url(' + (props.root + val.pt[0]) + ')' }}></div>
                                <div className="icon">
                                    <FaHeart /><span>&nbsp;{val.like}</span>
                                    <FaComment /><span>&nbsp;{val.message.length}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </article>
        </div>
    )
}

export default Home;
