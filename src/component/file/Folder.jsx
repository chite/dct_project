import React, { useState } from 'react';
import News from './News';
import { IoIosClose, IoIosRemove, IoIosSquareOutline, IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosArrowRoundUp, IoIosArrowDown, IoIosFolderOpen, IoIosSearch, IoIosRefresh } from "react-icons/io";
import ptTop from '../../resources/fileTopIcons.PNG';
import ptBar1 from '../../resources/fileIcons1.PNG';
import ptBar2 from '../../resources/fileIcons2.PNG';
import ptLeft from '../../resources/fileLeftIcons.PNG';
import newIcon from '../../resources/fileNew.png';
import photoIcon from '../../resources/filePhoto.png';

function Folder() {
    const [choose, setChoose] = useState(0);
    function handleClick(index) {
        setChoose(index + 1);
    }
    function handleClose(){
        setChoose(0);
    }
    return (
        <>
            {
                !!choose && 
                <News 
                    index={choose}
                    handleClose={handleClose}
                 />
            }
            <div className="layout grid-wrapper bg-white">
                <div className="bar">
                    <div className="img" style={{ 'backgroundImage': 'url(' + ptTop + ')' }}></div>
                    <div className="buttons">
                        <IoIosRemove />
                        <IoIosSquareOutline />
                        <IoIosClose />
                    </div>
                </div>
                <div className="box">
                    <div className="img-contain">
                        <div className="img" style={{ 'backgroundImage': 'url(' + ptBar1 + ')' }}></div>
                    </div>
                    <div className="img-contain">
                        <div className="img" style={{ 'backgroundImage': 'url(' + ptBar2 + ')' }}></div>
                    </div>
                </div>
                <div className="sign">
                    <IoIosArrowRoundBack />
                    <IoIosArrowRoundForward />
                    <IoIosArrowDown />
                    <IoIosArrowRoundUp />
                </div>
                <div className="line">
                    <div className="input d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <IoIosFolderOpen />
                            <span>&nbsp;&nbsp;&#62;&nbsp;&nbsp;本機&nbsp;&nbsp;&#62;&nbsp;&nbsp;桌面&nbsp;&nbsp;&#62;&nbsp;&nbsp;我的資料夾</span>
                        </div>
                        <div className="right d-flex align-items-center justify-content-between h-100">
                            <IoIosArrowDown />
                            <div className="icon-box h-100">
                                <IoIosRefresh />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seach align-items-center justify-content-center">
                    <div className="input d-flex align-items-center ">
                        <span>搜尋&nbsp;我的資料夾&nbsp;<IoIosSearch /></span>
                    </div>
                </div>
                <div className="left-part d-flex" >
                    <div className="img" style={{ 'backgroundImage': 'url(' + ptLeft + ')' }}></div>
                    {/* <div className="b"></div> */}
                </div>
                <div className="main">
                    <div className="card-container">
                        <button
                            className="card-element"
                            onDoubleClick={() => handleClick(0)}
                        >
                            <div className="img" style={{ 'backgroundImage': 'url(' + newIcon + ')' }}></div>
                            <p className="text">新聞稿(1)</p>
                        </button>
                        <button className="card-element">
                            <div className="img" style={{ 'backgroundImage': 'url(' + newIcon + ')' }}></div>
                            <p className="text">新聞稿(1)</p>
                        </button>
                        <button className="card-element">
                            <div className="img" style={{ 'backgroundImage': 'url(' + newIcon + ')' }}></div>
                            <p className="text">新聞稿(1)</p>
                        </button>
                        <button className="card-element">
                            <div className="img" style={{ 'backgroundImage': 'url(' + newIcon + ')' }}></div>
                            <p className="text">新聞稿(1)</p>
                        </button>
                        <button className="card-element">
                            <div className="img" style={{ 'backgroundImage': 'url(' + newIcon + ')' }}></div>
                            <p className="text">新聞稿(1)</p>
                        </button>
                        <button className="card-element">
                            <div className="img" style={{ 'backgroundImage': 'url(' + photoIcon + ')' }}></div>
                            <p className="text">圖片(1)</p>
                        </button>
                        <button className="card-element">
                            <div className="img" style={{ 'backgroundImage': 'url(' + photoIcon + ')' }}></div>
                            <p className="text">圖片(1)</p>
                        </button>
                        <button className="card-element">
                            <div className="img" style={{ 'backgroundImage': 'url(' + photoIcon + ')' }}></div>
                            <p className="text">圖片(1)</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Folder;
