import React from 'react';

function MiddlePart({ dates, time, today }) {
    return (
        <section className="main">
            <table className={(dates.length == 5 ? 'five ' : 'six ') + "main-table"}>
                <tbody>
                    {
                        dates.map((arr, index) => (
                            <tr key={index + 'tr'}>
                                {arr.map((val, eleIndex) => (
                                    <td key={eleIndex + 'td'}>
                                        <span className={(time[0] === today[0] && time[1] === today[1] && today[2] === val.day) ? 'today' : ''}>{val.day}</span>
                                        {
                                            (val.data.line.length > 0) &&
                                            val.data.line.map((pElement, pIndex) => (
                                                <p
                                                    key={pIndex}
                                                    className={(pElement.content === '' ? 'empty ' : '') + ('p' + pElement.color)}
                                                >{pElement.content}</p>
                                            ))
                                        }
                                        {
                                            (val.data.dot.length > 0) &&
                                            val.data.dot.map((liElement, liIndex) => (
                                                <ul key={liIndex} className={'li' + liElement.color}>
                                                    <li>{liElement.content}</li>
                                                </ul>
                                            ))
                                        }

                                    </td>
                                ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default MiddlePart;
