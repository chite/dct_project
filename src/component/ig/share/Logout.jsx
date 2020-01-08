import React from 'react';
import {withRouter} from 'react-router-dom';

function Logout(props) {
    return (
        <>
            <div className="dark-view" onClick={props.close}></div>
            <div className="logout btn-group-vertical">
                <button type="button" className="btn btn-light btn-lg disable" >更改密碼</button>
                <button type="button" className="btn btn-light btn-lg disable" >名牌</button>
                <button type="button" className="btn btn-light btn-lg disable" >應用程式和網站</button>
                <button type="button" className="btn btn-light btn-lg disable" >通知</button>
                <button type="button" className="btn btn-light btn-lg disable" >隱私設定和帳號安全</button>
                <button type="button" className="btn btn-light btn-lg disable" >登入活動</button>
                <button type="button" className="btn btn-light btn-lg disable" >Instagram 寄送的電子郵件</button>
                <button type="button" className="btn btn-light btn-lg disable" >回報問題</button>
                <button type="button" className="btn btn-light btn-lg " onClick={()=>props.history.push('/login')}>登出</button>
                <button type="button" className="btn btn-light btn-lg " onClick={props.close}>取消</button>
            </div>
        </>
    )
}

export default withRouter(Logout);
