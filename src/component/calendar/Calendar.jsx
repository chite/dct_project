import React, { useState, useEffect } from 'react';
import { FaSearch, FaRegQuestionCircle, FaRegSun, FaChevronUp, FaAngleLeft, FaAngleRight, FaPlus } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { MdApps } from "react-icons/md";
// import calIcon from '../../resources/calIcon.png';
import calKeep from '../../resources/calKeep.png';
import calTasks from '../../resources/calTasks.png';

function Calendar() {
    const [time, setTime] = useState([0, 0, 0]);
    const [dates, setDates] = useState([[{ mark: 0, day: 0 }]]);
    useEffect(() => {
        const date = new Date();
        setTime([date.getFullYear(), date.getMonth() + 1, date.getDate()]);
    }, [])
    useEffect(() => {
        let firstDay = new Date(time[0], time[1] - 1, 1);
        let currentMonthLength = new Date(time[0], time[1], 0).getDate();
        let lastMonthLength = new Date(time[0], time[1] - 2, 0).getDate();
        let currentMonth = [], splitedCurrentMonth = [];
        let temparyArray = [];
        firstDay = firstDay.getDay();   //0-6
        for (let i = lastMonthLength; i > lastMonthLength - firstDay; i--) {    //補足前面
            let date = {
                mark: 0,
                day: i
            }
            currentMonth.push(date);
        }
        currentMonth = currentMonth.reverse();
        for (let i = 1; i <= currentMonthLength; i++) { //填寫當月
            let date = {
                mark: 1,
                day: i
            }
            currentMonth.push(date);
        }
        for (let i = 1; i <= (7 - currentMonth.length % 7); i++) {    //補足後面
            let date = {
                mark: 0,
                day: i
            }
            temparyArray.push(date);
        }
        currentMonth = currentMonth.concat(temparyArray);

        for (let i = 0; i < currentMonth.length; i += 7) {  //以每周為單位切割
            splitedCurrentMonth.push(currentMonth.slice(i, i + 7));
        }
        setDates(splitedCurrentMonth);
    }, [time])
    return (
        <div className="layout cal-bg container-fluid">
            <nav className="cal-bar row p-2">
                <div className="left col-sm-2 d-none d-sm-flex align-items-center">
                    <FiAlignJustify />
                    <div className="img" style={{ 'backgroundImage': 'url(https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_13_v1.png)' }}></div>
                    <h1>日曆</h1>
                </div>
                <div className="middle col-12 col-sm-9 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-secondary mr-4" readOnly>今天</button>
                        <FaAngleLeft />
                        <FaAngleRight />
                        <h1>{time[0]}年{time[1]}月</h1>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaSearch />
                        <FaRegQuestionCircle />
                        <FaRegSun />
                        <button className="btn btn-outline-secondary" readOnly>月&nbsp;&nbsp;&#119119;</button>
                    </div>
                </div>
                <div className="right col-sm-1 d-none d-sm-flex align-items-center justify-content-between">
                    <MdApps />
                    <span className="self d-flex justify-content-center align-items-center">沐安</span>
                </div>
            </nav>
            <div className="row body">
                <section className="left-part col-3 d-flex flex-column justify-content-between">
                    <button className="d-flex align-self-baseline align-items-center">
                        <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                        <span>建立</span>
                    </button>
                    <div>
                        <nav className="bar d-flex justify-content-between align-items-center p-3">
                            <span>{time[0]}年{time[1]}月</span>
                            <div>
                                <FaAngleLeft />
                                &nbsp;&nbsp;
                                <FaAngleRight />
                            </div>
                        </nav>
                        <table className="w-100 left-cal">
                            <tbody>
                                <tr>
                                    <th>日</th>
                                    <th>一</th>
                                    <th>二</th>
                                    <th>三</th>
                                    <th>四</th>
                                    <th>五</th>
                                    <th>六</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    dates.map((arr, index) => (
                                        <tr key={index + 'tr'}>
                                            {arr.map((val, eleIndex) => (
                                                <td key={eleIndex + 'td'} className={val.mark ? 'currentMonth' : ''}>{val.day}</td>
                                            ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="text-center">
                            <input placeholder="搜尋使用者" className="search" />
                        </div>
                    </div>
                    <div>
                        <nav className="d-flex justify-content-between my-2"><h6>我的日曆</h6><FaChevronUp /></nav>
                        <div className="check"><input type="checkbox" /><label>杜沐安</label></div>
                        <div className="check"><input type="checkbox" /><label>生日</label></div>
                        <div className="check"><input type="checkbox" /><label>提醒</label></div>
                        <div className="check"><input type="checkbox" /><label>Tasks</label></div>
                    </div>
                    <div>
                        <nav className="d-flex justify-content-between my-2"><h6>其他日曆</h6><span><FaPlus /><FaChevronUp /></span></nav>
                        <div className="check"><input type="checkbox" /><label>Holidays In Taiwan</label></div>
                    </div>
                    <p>條款-隱私設定</p>
                </section>
                <article className="cal-container col-9 col-sm-8">B</article>
                <aside className="right-part col-sm-1">C</aside>
            </div>

        </div >
    )
}

export default Calendar;
