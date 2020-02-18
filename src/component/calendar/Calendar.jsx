import React, { useState, useEffect } from 'react';
import LeftPart from './LeftPart';
import MiddlePart from './MiddlePart';
import { FaSearch, FaRegQuestionCircle, FaRegSun, FaAngleLeft, FaAngleRight, FaPlus } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { MdApps } from "react-icons/md";
import jsonData from "../../json/calendar.json";
import calKeep from '../../resources/calKeep.png';
import calTasks from '../../resources/calTasks.png';

function Calendar(props) {
    const [today, setToday] = useState([0, 0, 0]);
    const [time, setTime] = useState([0, 0, 0]);
    const [dates, setDates] = useState([[{ mark: 0, day: 0, data: { dot: [], line: [] } }]]);

    useEffect(() => {
        const date = new Date();
        setTime([date.getFullYear(), date.getMonth() + 1, date.getDate()]);
        setToday([date.getFullYear(), date.getMonth() + 1, date.getDate()]);
        document.title = '杜沐安 - 日曆';
        document.getElementsByTagName('link')[0].href = props.root + '/calendar/shortcut.png';
    }, [])

    useEffect(() => {
        let stringTime = [String(time[0]), String(time[1]), String(time[2])];
        let preStringTime = [time[1] === 1 ? String(time[0] - 1) : String(time[0]), time[1] === 1 ? "12" : String(time[1] - 1)];
        let nextStringTime = [time[1] === 12 ? String(time[0] + 1) : String(time[0]), time[1] === 12 ? "1" : String(time[1] + 1)];
        let currentMonthObj = new Date(time[0], time[1]-1);
        currentMonthObj.setMonth(currentMonthObj.getMonth()-1);
        let lastMonthLength = (new Date(currentMonthObj.getFullYear(), currentMonthObj.getMonth()+1, 0)).getDate();
        let currentMonth = [], splitedCurrentMonth = [], temparyArray = [];
        let dataValid = checkDataValid();

        for (let i = lastMonthLength; i > lastMonthLength - (new Date(time[0], time[1] - 1, 1)).getDay(); i--) {    //補足前面
            let date = {
                mark: 0,
                day: i,
                data: { dot: [], line: [] }
            }
            if (dataValid[0]) {
                if (jsonData[preStringTime[0]][preStringTime[1]].hasOwnProperty(String(i))) {
                    date.data = jsonData[preStringTime[0]][preStringTime[1]][String(i)];
                }
            }
            currentMonth.push(date);
        }
        currentMonth = currentMonth.reverse();

        for (let i = 1; i <= (new Date(time[0], time[1], 0)).getDate(); i++) { //填寫當月
            let date = {
                mark: 1,
                day: i,
                data: { dot: [], line: [] }
            }
            if (dataValid[1]) {
                if (jsonData[stringTime[0]][stringTime[1]].hasOwnProperty(String(i))) {
                    date.data = jsonData[stringTime[0]][stringTime[1]][String(i)];
                }
            }
            currentMonth.push(date);
        }
        
        if (currentMonth.length % 7) {  //避免整除
            for (let i = 1; i <= (7 - currentMonth.length % 7); i++) {    //補足後面
                let date = {
                    mark: 0,
                    day: i,
                    data: { dot: [], line: [] }
                }
                if (dataValid[2]) {
                    if (jsonData[nextStringTime[0]][nextStringTime[1]].hasOwnProperty(String(i))) {
                        date.data = jsonData[nextStringTime[0]][nextStringTime[1]][String(i)];
                    }
                }
                temparyArray.push(date);
            }
        }

        currentMonth = currentMonth.concat(temparyArray);
        for (let i = 0; i < currentMonth.length; i += 7) {  //以每周為單位切割
            splitedCurrentMonth.push(currentMonth.slice(i, i + 7));
        }
        setDates(splitedCurrentMonth);
    }, [time])

    function checkDataValid() {
        let preData = 0, currentData = 0, nextData = 0;
        let preDateTimeStamp = new Date(time[0], time[1] - 2);
        let nextDateTimeStamp = new Date(time[0], time[1]);
        let preDate = [String(preDateTimeStamp.getFullYear()), String(preDateTimeStamp.getMonth() + 1)];
        let nextDate = [String(nextDateTimeStamp.getFullYear()), String(nextDateTimeStamp.getMonth() + 1)];
        if (jsonData.hasOwnProperty(preDate[0])) {
            if (jsonData[preDate[0]].hasOwnProperty(preDate[1])) {
                preData = 1;
            }
        }
        if (jsonData.hasOwnProperty(String(time[0]))) {
            if (jsonData[String(time[0])].hasOwnProperty(String(time[1]))) {
                currentData = 1;
            }
        }
        if (jsonData.hasOwnProperty(nextDate[0])) {
            if (jsonData[nextDate[0]].hasOwnProperty(nextDate[1])) {
                nextData = 1;
            }
        }
        return [preData, currentData, nextData];
    }

    function changeDate(num) {
        const date = new Date(time[0], time[1] - 1 + num);
        setTime([date.getFullYear(), date.getMonth() + 1, date.getDate()]);
    }
    
    function toToday() {
        setTime([today[0], today[1], today[2]]);
    }
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
                        <button className="btn btn-outline-secondary mr-4" onClick={toToday}>今天</button>
                        <button className="direction" onClick={() => changeDate(-1)} title="上個月"><FaAngleLeft /></button>
                        <button className="direction" onClick={() => changeDate(1)} title="下個月"><FaAngleRight /></button>
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
                <LeftPart
                    time={time}
                    changeDate={changeDate}
                    dates={dates}
                    today={today}
                />
                <article className="cal-container d-none d-sm-flex col-10">
                    <MiddlePart
                        dates={dates}
                        time={time}
                        today={today}
                    />
                    <aside className="right-part d-flex flex-column align-items-center">
                        <div className="img" style={{ 'backgroundImage': 'url(' + calKeep + ')' }}></div>
                        <div className="img" style={{ 'backgroundImage': 'url(' + calTasks + ')' }}></div>
                        <span>—</span>
                        <FaPlus />
                    </aside>
                </article>
            </div>

        </div >
    )
}

export default Calendar;
