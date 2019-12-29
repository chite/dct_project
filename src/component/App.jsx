import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './ig/Login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/login" render={Login} />
            </BrowserRouter>
        )
    }
}
export default App;