import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './ig/Login';
import Home from './ig/Home';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/login" render={Login} />
                <Route path="/home" render={Home} />
            </HashRouter>
        )
    }
}
export default App;