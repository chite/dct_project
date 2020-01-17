import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './ig/Login';
import Home from './ig/Home';
import Post from './ig/Post';
import LineLogin from './line/LineLogin';
import LineHome from './line/LineHome';
import Calendar from './calendar/Calendar';
import Folder from './file/Folder';

const url = 'https://raw.githubusercontent.com/chite/dct_project/master/ig/assets/';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/post" component={Post} />
                <Route exact path="/line" render={(props)=><LineLogin root={url} {...props} />} />
                <Route path="/line/home" render={(props)=><LineHome root={url} {...props} />} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/folder" component={Folder} />
            </HashRouter>
        )
    }
}
export default App;