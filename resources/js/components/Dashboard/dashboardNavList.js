import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from 'react-router-dom';

import BarChartIcon from '@material-ui/icons/BarChart';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';


import { Divider } from '@material-ui/core';
export const dashboardList = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <VisibilityIcon />
            </ListItemIcon>
            <ListItemText primary="View Attendence" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard/attendance">
            <ListItemIcon>
                <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Give Attendence" />
        </ListItem>

        <ListItem button component={Link} to="/register">
            <ListItemIcon>
                <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
        </ListItem>


        <ListItem button component={Link} to="/register">
            <ListItemIcon>
                <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Request Attendence" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard/attendance">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Employee's Status" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard/attendance">
            <ListItemIcon>
                <AlarmAddIcon />
            </ListItemIcon>
            <ListItemText primary="Set Reminder" />
        </ListItem>

        <Divider />
        <ListItem button component={Link} to="/login">
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
);

/* ResponsiveDrawer.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer; */
