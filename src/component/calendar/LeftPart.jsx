import React from 'react';
import { FaChevronUp, FaAngleLeft, FaAngleRight, FaPlus } from "react-icons/fa";

function LeftPart({ time, changeDate, dates, today}) {
    return (
        <section className="left-part col-12 col-sm-2 d-flex flex-column justify-content-between">
            <button className="d-flex align-self-baseline align-items-center">
                <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                <span>建立</span>
            </button>
            <div>
                <nav className="bar d-flex justify-content-between align-items-center px-2">
                    <span>{time[0]}年{time[1]}月</span>
                    <div>
                        <span className="btn-like" onClick={() => changeDate(-1)} title="上個月"><FaAngleLeft /></span>
                        &nbsp;&nbsp;
                                <span className="btn-like" onClick={() => changeDate(1)} title="下個月"><FaAngleRight /></span>
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
                                        <td key={eleIndex + 'td'} className={val.mark ? 'currentMonth' : ''}>
                                            <span className={(time[0] === today[0] && time[1] === today[1] && today[2] === val.day) ? 'today' : ''}>{val.day}</span>
                                        </td>
                                    ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="text-center">
                    <input placeholder="搜尋使用者" className="search" readOnly />
                </div>
            </div>
            <div>
                <nav className="d-flex justify-content-between my-2"><h6>我的日曆</h6><FaChevronUp /></nav>
                <div className="check"><input type="checkbox" className="red" checked readOnly disabled /><label>杜沐安</label></div>
                <div className="check"><input type="checkbox" className="green" checked readOnly disabled /><label>生日</label></div>
                <div className="check"><input type="checkbox" className="purple" readOnly disabled /><label>提醒</label></div>
                <div className="check"><input type="checkbox" className="blue" readOnly disabled /><label>Tasks</label></div>
            </div>
            <div>
                <nav className="other-cal d-flex justify-content-between my-2"><h6>其他日曆</h6><span><FaPlus /><FaChevronUp /></span></nav>
                <div className="check"><input type="checkbox" className="dark-green" checked readOnly disabled /><label>Holidays In Taiwan</label></div>
            </div>
            <p className="security">條款 - 隱私設定</p>
        </section>
    )
}

export default LeftPart;
