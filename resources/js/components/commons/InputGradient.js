import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TextField, NoSsr } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
function InputGradient(props) {
    
    const { classes, id, className, label, ...others } = props;

    const [value, setValue] = useState("");

    const input = <TextField
        value={value}
        onChange={function (e) { setValue(e.target.value) }}
        className={clsx(className, "input-gradient")}
        label={label || "Placeholder"}
        variant="outlined"
        id={id}
        {...others}
    />

    return [value, input];
}

export default InputGradient;
