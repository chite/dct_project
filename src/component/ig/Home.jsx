import React from 'react';
import Bar from './share/Bar';
import Post from './share/Post';
import { IoMdGrid } from "react-icons/io";
import { FaRegUserCircle, FaHeart, FaComment, FaRegBookmark } from "react-icons/fa";
import { DiAptana } from "react-icons/di";
import { FiTv } from "react-icons/fi";
import selfPt from '../../resources/igSelfie.jpg';
import photo from '../../resources/igPhoto.jpg';

function Home() {
    return (
        <div className="layout ig-bg">
            <Bar />
            <Post />
            <article className="home-layout mb-5">
                <div className="d-flex justify-content-between align-items-start pt-5">
                    <div className="self-photo" >
                        <div className="photo-container mx-auto">
                            <div className="photo" style={{ 'backgroundImage': 'url(' + selfPt + ')' }}></div>
                        </div>
                    </div>
                    <div className="document">
                        <div className="d-flex flex-direction-row">
                            <h1>pikachu111</h1>
                            <button className="d-none d-sm-block btn btn-outline-secondary btn-sm ml-3" disabled>編輯個人檔案</button>
                            &nbsp;&nbsp;
                            <DiAptana />
                        </div>
                        <button className="d-block d-sm-none btn btn-outline-secondary btn-sm w-75 mt-4" disabled>編輯個人檔案</button>
                        <div className=" flex-direction-row mt-4 d-none d-sm-flex">
                            <h6>1,949 貼文</h6>
                            <h6 className="ml-4">635千 位追蹤者</h6>
                            <h6 className="ml-4">558 追蹤中</h6>
                        </div>
                        <div className="d-none d-sm-block">
                            <h6>k0000000</h6>
                            <p>有仼何活動 電影 戲劇 節目邀約</p>
                            <p>E-mail: sharon_701111@hotmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="ml-3 mt-3 d-sm-none">
                    <h6>k0000000</h6>
                    <p>有仼何活動 電影 戲劇 節目邀約</p>
                    <p>E-mail: sharon_701111@hotmail.com</p>
                </div>
                <div className="history w-100">
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
                </div>
                <div className="s-follow flex-direction-row justify-content-around d-flex d-sm-none">
                    <h6 className="text-center"><span>1,949</span><br/>貼文</h6>
                    <h6 className="ml-4 text-center"><span>635千</span><br/>位追蹤者</h6>
                    <h6 className="ml-4 text-center"><span>558</span><br/>追蹤中</h6>
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
                    <div className="card-element">
                        <div className="bg" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                        <div className="icon">
                            <FaHeart /><span>&nbsp;66</span>
                            <FaComment /><span>&nbsp;2</span>
                        </div>
                    </div>
                    <div className="card-element">
                        <div className="bg" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                        <div className="icon">
                            <FaHeart /><span>&nbsp;66</span>
                            <FaComment /><span>&nbsp;2</span>
                        </div>
                    </div>
                    <div className="card-element">
                        <div className="bg" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                        <div className="icon">
                            <FaHeart /><span>&nbsp;66</span>
                            <FaComment /><span>&nbsp;2</span>
                        </div>
                    </div>
                    <div className="card-element">
                        <div className="bg" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                        <div className="icon">
                            <FaHeart /><span>&nbsp;66</span>
                            <FaComment /><span>&nbsp;2</span>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    )
}

export default Home;
