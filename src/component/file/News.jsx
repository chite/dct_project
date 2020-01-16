import React, { useEffect } from 'react';
import photo from '../../resources/newImages.jpg';
import { IoIosClose } from "react-icons/io";

function News({ index, handleClose }) {
    useEffect(() => {
        console.log(index)
    }, []);
    return (
        <div className="news-wrapper">
            <div className="bar">
                <h6>新聞閱讀器</h6>
                <h6 onClick={handleClose}>
                    <IoIosClose />
                </h6>
            </div>
            <article className="main bg-white mx-auto w-75 px-5 py-4">
                <h1>內科名醫驚爆涉貪</h1>
                <div className="img-container">
                    <div className="img" style={{ 'backgroundImage': 'url(' + photo + ')' }}></div>
                    <div className="alt">
                        <h5>圖片取自免費圖庫</h5>
                    </div>
                </div>
                <time>張家智 採訪  2012年8月9日 18:42</time>
                <p>北部某大醫院內科主任王姓醫師，涉嫌於2009年間收受賄賂，護航業者採購案，不法獲利近兩百萬餘元。</p>
                <p>醫院離職人員揭發，王姓醫師於2009年間為醫院辦理「術後保健」、「高齡組群營養補充方案」等多起藥物採購方案時，與藥品公司負責人勾結。</p>
                <p>王姓醫師因與某製藥公司的負責人為舊識，因此王姓醫師指示下屬，將標案採限制標、洩漏相關標案訊息或是以差別待遇等方式，讓特定製藥公司取得上述總共約200萬元的藥物採購案。</p>
                <p>王姓醫師在檢方偵辦時認罪，檢方考量他認罪、繳回犯罪所得，請求依貪污治罪條例第8條第2項規定，減輕其刑。至於行賄廠商已被偵辦單位鎖定，目前正進行拘提。</p>
            </article>
        </div>
    )
}

export default News;
