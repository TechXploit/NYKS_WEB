import React from 'react';
import { Route, BrowserRouter, Switch, matchPath, Redirect } from 'react-router-dom';

const Redirect404 = function ({ location }) {
    console.log((location.state !== "undefined"))
    return (
        <Redirect to={Object.assign({}, location, { state: { is404: true } })} />
    )
}


export default Redirect404;