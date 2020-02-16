import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ButtonGradient from './commons/ButtonGradient';
import InputGradient from './commons/InputGradient';
import Login from './Login/Login';
import theme from './commons/theme';
import { ThemeProvider , CssBaseline } from '@material-ui/core';
import Dashboard from './Dashboard/Dashboard';
import Nav from './commons/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Layout() {

    return (
        <div>
            <ThemeProvider
                theme={theme}
            >
                <CssBaseline />
                <Router>
                    <Login />
                    {/* <Dashboard /> */}
                    {/* <Nav /> */}
                </Router>
            </ThemeProvider>
        </div>
    );
}
if (document.getElementById('app')) {
    ReactDOM.render(<Layout />, document.getElementById('app'));
}


