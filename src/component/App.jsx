import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './ig/Login';
import Home from './ig/Home';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/login" render={Login} />
                <Route path="/home" render={Home} />
            </BrowserRouter>
        )
    }
}
export default App;