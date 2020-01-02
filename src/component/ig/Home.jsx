import React from 'react';
import Bar from './share/Bar';
import selfPt from '../../resources/selfie.jpg';

function Home() {
    return (
        <div className="layout ig-bg">
            <Bar />
            <article className="home-layout">
                <div className="d-flex justify-content-between align-items-start pt-5">
                    <div className="self-photo" >
                        <div className="photo mx-auto" style={{ 'backgroundImage': 'url(' + selfPt + ')' }}></div>
                    </div>
                    <div className="document">
                        <div className="d-flex flex-direction-row">
                            <h1>k0000000</h1>
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
                <div className="history">

                </div>
            </article>
        </div>
    )
}

export default Home;
