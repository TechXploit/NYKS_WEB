import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import MyTable from '../commons/MyTable';
import Redirect404 from './Redirect404';
const DashboardRoutes = function ({ match }) {
    console.log("Main ")
    return (
        <Switch>
            <Route path={match.url} exact render={function () { return <div>Home</div> }} />
            <Route path={match.url + "/attendance"} exact component={Login} />
            <Route component={Redirect404} />
        </Switch>
    )
}
export default DashboardRoutes;