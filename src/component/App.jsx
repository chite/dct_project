import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './ig/Login';
import Home from './ig/Home';
import Post from './ig/Post';
import LineLogin from './line/LineLogin';
import LineHome from './line/LineHome';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/post" component={Post} />
                <Route exact path="/line" component={LineLogin} />
                <Route path="/line/home" component={LineHome} />
            </HashRouter>
        )
    }
}
export default App;