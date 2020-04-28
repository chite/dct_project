import React, { useState, useEffect } from 'react';
import News from './News';
import { IoIosClose, IoIosRemove, IoIosSquareOutline, IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosArrowRoundUp, IoIosArrowDown, IoIosFolderOpen, IoIosSearch, IoIosRefresh } from "react-icons/io";
import ptTop from '../../resources/fileTopIcons.PNG';
import ptBar1 from '../../resources/fileIcons1.PNG';
import ptBar2 from '../../resources/fileIcons2.PNG';
import ptLeft from '../../resources/fileLeftIcons.PNG';
import newIcon from '../../resources/fileNew.png';
import data from '../../json/folder.json';

function Folder(props) {
    const [choose, setChoose] = useState(-1);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.title = '我的資料夾';
        document.getElementsByTagName('link')[0].href = props.root + '/folder/folder.png';

        // 監聽使用者按後退鍵
        window.onhashchange = function () {
            let index = location.hash.split('folder')[1].slice(1);
            if (index) {
                if (Number.isNaN(Number(index)) || index > 2) return;
                setOpen(true);
                setChoose(index);
            } else {
                setOpen(false);
                setChoose(-1);
            }
        }
        return () => window.onhashchange = null;
    }, [])
    function handleClick(index) {
        setChoose(index);
    }
    function handleOpen() {
        props.history.push('/folder/' + String(choose));
    }
    function handleClose() {
        props.history.goBack();
    }
    return (
        <>
            {
                open &&
                <News
                    handleClose={handleClose}
                    data={data[choose]}
                />
            }
            <div className="layout grid-wrapper bg-white">
                <div className="bar">
                    <div className="img" style={{ 'backgroundImage': 'url(' + ptTop + ')' }}></div>
                    <div className="buttons">
                        <IoIosRemove />
                        <IoIosSquareOutline />
                        <span onClick={() => window.history.back()}>
                            <IoIosClose />
                        </span>
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
                </div>
                <div className="main">
                    <div className="card-container">
                        {
                            data.map((val, index) => (
                                <button
                                    key={index}
                                    className="card-element"
                                    onDoubleClick={handleOpen}
                                    onClick={() => handleClick(index)}
                                >
                                    <div className="img" style={{ 'backgroundImage': 'url(' + newIcon + ')' }}></div>
                                    <p className={`text ${index === choose ? 'wrap' : ''}`}>{val.title}</p>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Folder;
