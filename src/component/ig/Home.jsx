import React from 'react';
import Bar from './share/Bar';
import { IoMdGrid } from "react-icons/io";
import { FaRegUserCircle, FaHeart, FaComment } from "react-icons/fa";
import selfPt from '../../resources/selfie.jpg';
import photo from '../../resources/igPhoto.jpg';

function Home() {
    return (
        <div className="layout ig-bg">
            <Bar />
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
                            <button className="btn text-white btn-sm ml-3">追蹤</button>
                            <button className="btn text-white btn-sm ml-3">&#x25BE;</button>
                            <h1 className="font-600 ml-3">&#183;&#183;&#183;</h1>
                        </div>
                        <div className="d-flex flex-direction-row mt-4">
                            <h6>1,949 貼文</h6>
                            <h6 className="ml-4">635千 位追蹤者</h6>
                            <h6 className="ml-4">558 追蹤中</h6>
                        </div>
                        <div className="about">
                            <h6>k0000000</h6>
                            <p>有仼何活動 電影 戲劇 節目邀約</p>
                            <p>E-mail: sharon_701111@hotmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="history mt-5">
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
                <div className="post-banner d-flex justify-content-center mt-5">
                    <div className="mx-5">
                        <IoMdGrid />
                        <span>&nbsp;貼文</span>
                    </div>
                    <div className="mx-5">
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
