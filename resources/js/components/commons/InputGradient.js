import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TextField, NoSsr, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
function InputGradient(props) {

    const { classes, id, className, label, error, disabled, ...others } = props;

    const [value, setValue] = useState("");

    const input = (
        <FormControl fullWidth >
            <TextField
                value={value}
                onChange={function (e) { setValue(e.target.value) }}
                className={clsx({ "input-gradient": (!error), "input-error": (error), "input-disabled": (disabled) }, className)}
                label={label || "Placeholder"}
                variant="outlined"
                id={id}
                disabled={disabled}
                {...others}
            />
        </FormControl>
    )

    return [value, input];
}

export default InputGradient;
