import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ButtonGradient from './commons/ButtonGradient';
import InputGradient from './commons/InputGradient';
import Login from './Login/Login';
import theme from './commons/theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Dashboard from './Dashboard/Dashboard';
import Nav from './commons/Nav';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import NotFound from './commons/NotFound';
import { dashboardList } from './Dashboard/dashboardNavList';

export default function Layout() {
    console.log("Layout")
    return (
        <ThemeProvider
            theme={theme}
        >
            <CssBaseline />
            <Router>
                <Route
                    render={function ({ location }) {
                        console.log(location)
                        return (
                            (location.state && location.state.is404)
                                ? <NotFound />
                                : <Routes location={location} />
                        );
                    }} 
                />
            </Router>
        </ThemeProvider>
    );
}
if (document.getElementById('app')) {
    ReactDOM.render(<Layout />, document.getElementById('app'));
}