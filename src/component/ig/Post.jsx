import React, { useState, useEffect } from 'react';
import Bar from './share/Bar';
import igSelfie from '../../resources/igSelfie.jpg';
import igSelfie2 from '../../resources/igSelfie2.jpg';
import igPhoto from '../../resources/igPost.JPG';
import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";

function Post() {
    const [show, setShow] = useState([false]);
    const [moveState, setMove] = useState(false);

    const handleClick = (index) => {
        let newShow = [...show];
        newShow[index] = true;
        setShow(newShow);
    }

    useEffect(() => {
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

    return (
        <div className="layout ig-bg">
            <Bar />
            <article className="home-layout mb-5">
                <div className="row pt-70">
                    <div className="col-12 col-sm-8 post-area">
                        <div className="post-container bg-white w-100 mx-auto">
                            <nav className="post-bar p-3">
                                <div className="d-flex justify-content-between w-100">
                                    <div className="d-flex justify-content-between">
                                        <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie2 + ')' }}></div>
                                        <div className="ml-3">
                                            <h6>andypeng1031</h6>
                                            <h6>紫禁城</h6>
                                        </div>
                                    </div>
                                    <h2 className="text-secondary">&#183;&#183;&#183;</h2>
                                </div>
                            </nav>
                            <div className="post-photo" style={{ 'backgroundImage': 'url(' + igPhoto + ')' }}></div>
                            <div className="sign d-flex justify-content-between px-3 mt-2">
                                <div className=" d-flex">
                                    <FaRegHeart />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <FaRegComment />
                                </div>
                                <FaRegBookmark />
                            </div>
                            <p className="text px-3 mt-2 d-flex align-items-center">
                                <span className="d-inline-block image" style={{ 'backgroundImage': 'url(' + igSelfie + ')' }}></span>
                                &nbsp;<strong>pikachu111</strong>&nbsp;和&nbsp;<strong>其他24人</strong>&nbsp;都說讚
                            </p>
                            <div className="text">
                                <p className={show[0] ? "" : "hide"} onClick={() => handleClick(0)}>
                                    andypeng1031 2020/1/5<br />實習最後一個週末來朝聖北京紫禁城
                                    <br />看到了天安門、太和殿等知名建築物
                                    <br />怕大家不相信 送上幾張照片
                                    <br />到處請路人甲幫我拍照😂
                                </p>
                            </div>
                            <div className="text">
                                <p>&nbsp;<strong>stephen___li</strong>&nbsp;You look more ________. (Not fatter)</p>
                                <p>&nbsp;<strong>ooxx._.1014</strong>&nbsp;@qw_02 擺著長肥肉❤️</p>
                            </div>
                            <h6 className="time">2 小時前</h6>
                            <div className="leave-message d-flex justify-content-between p-3">
                                <span>留言……</span><span className="text-primary">發佈</span>
                            </div>
                        </div>
                    </div>
                    <div className={(moveState ? "moving " : "") + "side-part d-none d-sm-block col-sm-4"}>
                        <div className="user d-flex align-items-center">
                            <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie + ')' }}></div>
                            <div className="ml-2">
                                <h6>pikachu111</h6>
                                <p>皮卡丘</p>
                            </div>
                        </div>
                        <section className="section mt-3 bg-white pt-3 pl-3">
                            <div className="section-bar d-flex justify-content-between pr-3">
                                <h6>限時動態</h6>
                                <h6>全部觀看</h6>
                            </div>
                            <div className="friend-list">
                                <div className="friends">
                                    <div className="d-flex">
                                        <div className="image-border">
                                            <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie2 + ')' }}></div>
                                        </div>
                                        <div className="ml-2">
                                            <div>
                                                <h6>andypeng1031</h6>
                                                <p>40分鐘前</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="friends">
                                    <div className="d-flex">
                                        <div className="image-border">
                                            <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie2 + ')' }}></div>
                                        </div>
                                        <div className="ml-2">
                                            <div>
                                                <h6>andypeng1031</h6>
                                                <p>40分鐘前</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="friends">
                                    <div className="d-flex">
                                        <div className="image-border">
                                            <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie2 + ')' }}></div>
                                        </div>
                                        <div className="ml-2">
                                            <div>
                                                <h6>andypeng1031</h6>
                                                <p>40分鐘前</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="friends">
                                    <div className="d-flex">
                                        <div className="image-border">
                                            <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie2 + ')' }}></div>
                                        </div>
                                        <div className="ml-2">
                                            <div>
                                                <h6>andypeng1031</h6>
                                                <p>40分鐘前</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section mt-3 bg-white pt-3 px-3">
                            <div className="section-bar d-flex justify-content-between">
                                <h6>推薦用戶</h6>
                                <h6>查看全部</h6>
                            </div>
                            <div className="friends">
                                <div className="d-flex">
                                    <div className="image-border">
                                        <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie2 + ')' }}></div>
                                    </div>
                                    <div className="ml-2">
                                        <div>
                                            <h6>andypeng1031</h6>
                                            <p>為你推薦</p>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-primary"><strong>追蹤</strong></h6>
                            </div>
                            <div className="friends">
                                <div className="d-flex">
                                    <div className="image-border">
                                        <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie2 + ')' }}></div>
                                    </div>
                                    <div className="ml-2">
                                        <div>
                                            <h6>andypeng1031</h6>
                                            <p>為你推薦</p>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-primary"><strong>追蹤</strong></h6>
                            </div>
                            <div className="friends">
                                <div className="d-flex">
                                    <div className="image-border">
                                        <div className="image" style={{ 'backgroundImage': 'url(' + igSelfie2 + ')' }}></div>
                                    </div>
                                    <div className="ml-2">
                                        <div>
                                            <h6>andypeng1031</h6>
                                            <p>為你推薦</p>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-primary"><strong>追蹤</strong></h6>
                            </div>
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
