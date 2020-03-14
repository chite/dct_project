import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './ig/Login';
import Home from './ig/Home';
import Post from './ig/Post';
import LineLogin from './line/LineLogin';
import LineHome from './line/LineHome';
import Calendar from './calendar/Calendar';
import Folder from './file/Folder';

// const url = 'https://raw.githubusercontent.com/chite/dct_project/master/ig/assets/';
const url = 'http://localhost:9000/ig/assets/'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route exact path="/ig" render={(props)=><Login root={url} {...props} />} />
                <Route path="/ig/home" render={(props)=><Home root={url} {...props} />} />
                <Route path="/ig/post" render={(props)=><Post root={url} {...props} />} />
                <Route exact path="/line" render={(props)=><LineLogin root={url} {...props} />} />
                <Route path="/line/home" render={(props)=><LineHome root={url} {...props} />} />
                <Route path="/calendar" render={(props)=><Calendar root={url} {...props} />} />
                <Route path="/folder" render={(props)=><Folder root={url} {...props} />} />
            </HashRouter>
        )
    }
}
export default App;