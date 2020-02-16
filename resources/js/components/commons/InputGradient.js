import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TextField, NoSsr } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
function InputGradient(props) {
    const { classes, id, className, label, ...others } = props;

    return (
        <NoSsr>
            <TextField className={clsx(className, "input-gradient")} label={label || "Placeholder"} variant="outlined" id={id} {...others} />
        </NoSsr>
    );
}

export default InputGradient;
