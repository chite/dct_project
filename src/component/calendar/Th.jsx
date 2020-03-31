import React from 'react';
import { Link } from 'react-router-dom';

function Th({ root, show, ...props }) {
    return (
        <ul
            className={`apps ${show?'apps--active':''}`}
        >
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/Search_icon.png' + ')' }}
            >
                <a href='https://chite.github.io/dct_project/googleIndex/googleIndex.html'></a>
            </li>
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/YouTube_icon.png' + ')' }}
            >
                {/* <Link to=""></Link> */}
            </li>
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/Maps_icon.png' + ')' }}
            >
                <a href="https://chite.github.io/dct_project/map/mapIndex.html"></a>
            </li>
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/Drive_icon.png' + ')' }}
            >
                {/* <Link to=""></Link> */}
            </li>
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/Play_icon.png' + ')' }}
            >
                {/* <Link to=""></Link> */}
            </li>
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/Contacts_icon.png' + ')' }}
            >
                {/* <Link to=""></Link> */}
            </li>
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/Gmail_icon.png' + ')' }}
            >
                <a href="https://chite.github.io/dct_project/gmail/index.html"></a>
            </li>
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/Calendar_icon.png' + ')' }}
            >
                <a href="https://chite.github.io/dct_project/ig/index.html#/calendar"></a>
            </li>
            <li
                className="apps__element"
                style={{ 'backgroundImage': 'url(' + root + 'calendar/Photos_icon.png' + ')' }}
            >
                {/* <Link to=""></Link> */}
            </li>
        </ul>
    )
}

export default Th
