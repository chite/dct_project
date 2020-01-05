import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './ig/Login';
import Home from './ig/Home';
import Post from './ig/Post';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/post" component={Post} />
            </HashRouter>
        )
    }
}
export default App;