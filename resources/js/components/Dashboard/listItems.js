import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export const dashboardList = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <DateRangeIcon />
            </ListItemIcon>
            <ListItemText primary="View Attendence" />
        </ListItem>

        <ListItem button component={Link} to="/attendance-give">
            <ListItemIcon>
                <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Give Attendence" />
        </ListItem>

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
