import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    root: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin:'16px 0 0 0'
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    
};
function ButtonGradient(props) {
    const { classes, children, className, ...others } = props;
    return (
        <Button className={clsx(classes.root, className, "btn-gradient")} {...others}>
            {children}
        </Button>
    );
}
ButtonGradient.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}
export default withStyles(styles)(ButtonGradient);
