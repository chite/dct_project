import React, { useState, useEffect } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import igIcon from '../../resources/igIcon.PNG';
import igButton from '../../resources/igButton.PNG';

function Login(props) {
    const [psd, setPsd] = useState('');
    useEffect(() => {
        document.title = 'Instagram';
        document.getElementsByTagName('link')[0].href = props.root + '/ig/shortcuticon.png';
        
        localStorage.setItem('igState', 1);
        localStorage.setItem('igValid', true);
    }, []);
    function handleChange(val){
        let value = '';
        if (val === '大帳') {
            value = '1';
        } else if (val === '小帳') {
            value = '0';
        } else {
            return;
        }
        localStorage.setItem('igState', value);
        setPsd(value);
    }
    const enter = () => {
        if (!psd) return;

        const state = localStorage.getItem('igState');
        if (state === '0' && localStorage.getItem('igValid') === 'false') {
            alert('帳密錯誤');
            return;
        }
        props.history.push('/ig/post');
    }
    return (
        <div className="layout ig-bg d-inline-block w-100">
            <div className="login-box m-3 mx-auto p-2 pb-4">
                <div className="ig-login-title" style={{ 'backgroundImage': 'url(' + igIcon + ')' }}></div>
                <input placeholder="電話號碼、用戶名稱或電子郵件" className="d-block mx-auto w-75" value="udonneed@nccu.edu.tw" readOnly />
                <input placeholder="密碼" className="d-block mx-auto my-3 w-75" list="ps" onInput={(e) => handleChange(e.target.value)} />
                <datalist id="ps">
                    <option value="大帳">大帳</option>
                    <option value="小帳">小帳</option>
                </datalist>
                <button type="button" className="btn btn-primary w-75 d-block mx-auto" onClick={enter}>登入</button>
                <div className="d-flex justify-content-center align-items-center w-75 mx-auto my-4">
                    <div className="bottom-line"></div>
                    <h6 className="mx-3">或</h6>
                    <div className="bottom-line"></div>
                </div>
                <h6 className="text-fb text-center"><FaFacebookSquare /> 使用 Facebook 帳號登入</h6>
                <p className="font-075 text-center text-fb">忘記密碼？</p>
            </div>
            <div className="login-box mx-auto p-4">
                <h6 className="text-center">沒有帳號嗎？<span className="text-primary">註冊</span></h6>
            </div>
            <h6 className="text-center my-4">下載應用程式。</h6>
            <div className="ig-login-btn text-center">
                <div className="w-100" style={{ 'backgroundImage': 'url(' + igButton + ')' }}></div>
            </div>
        </div>
    )
}

export default Login;
