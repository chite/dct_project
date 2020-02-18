import React, {useEffect} from 'react';
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {IoMdLock} from "react-icons/io";
import LineIcon from '../../resources/lineIcon.png';

function LineLogin(props) {
    useEffect(()=>{
        document.title = 'LINE';
        document.getElementsByTagName('link')[0].href = props.root + '/line/shortcuticon.png';
    },[])
    function login(){
        props.history.push("/line/home");
    }
    return (
        <div className="layout line-bg">
            <article className="line-login-container">
                <h1 id="line-icon" style={{ 'backgroundImage': 'url(' + LineIcon + ')' }}></h1>
                <div className="bar row mt-3">
                      <div className="col-6">
                          <h6>登入</h6>
                      </div>
                      <div className="col-6">
                          <h6>使用行動條碼登入</h6>
                      </div>
                </div>
                <div className="inputs w-100">
                    <div className="w-100 first-input">
                    <input placeholder="電子郵件帳號" value="justclickit@nXcu.edu.tw" readOnly />
                    <div><AiOutlineQuestionCircle /></div>
                    </div>
                    <input type="password" className="w-100" placeholder="密碼" value="111111111" readOnly />
                </div>
                <div className="button w-100 mt-3">
                    <button 
                    className="btn btn-lg w-100 login-btn text-white py-3"
                    onClick={login}
                    >登入</button>
                </div>
                <div className="mt-3">
                    <h6 className="btn-text">使用電話號碼登入&nbsp;&nbsp;&#65125;</h6>
                </div>
            </article>
            <aside className="bottom-part">
                <div className="w-100">
                    <button className="w-100">註冊新帳號</button>
                    <div className="group mt-3 d-flex justify-content-center text-secondary">
                        <p><IoMdLock/>&nbsp;重設密碼</p>
                        <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                        <p>常見問題</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default LineLogin;
