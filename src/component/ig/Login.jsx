import React from 'react';
import { Container, Row } from 'react-bootstrap';
import igIcon from '../../resources/igIcon.PNG';

function Login() {
    return (
        <div className="layout ig-bg">
            <div className="login-box mx-auto p-2 pb-4">
                <div className="ig-login-title" style={{ 'backgroundImage': 'url(' + igIcon + ')' }}></div>
                <input placeholder="電話號碼、用戶名稱或電子郵件" className="d-block mx-auto w-75" />
                <input placeholder="密碼" className="d-block mx-auto my-3 w-75" />
            </div>
        </div>
    )
}

export default Login;
