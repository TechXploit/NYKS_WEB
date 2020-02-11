import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TextField, NoSsr } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

/* const StyledInput = styled(TextField)`
&.MuiFormControl-root{
    padding:4px;
    background:#f00;
}
label.Mui-focused {
    color: #7b2eb6;
  }
  .MuiOutlinedInput-root {
      border-radius: 0;
    fieldset {
      border-color: transparent;
      background:white;
    }
    &:hover fieldset {
      border-color: transparent;
    }
    &.Mui-focused fieldset {
      border-color: transparent;
    }
  }
`; */
function InputGradient(props) {
    const { classes, id, className, label, ...others } = props;

    return (
        <NoSsr>
            <form noValidate autoComplete="off">
                <TextField className={clsx(className, "input-gradient")} label={label || "Placeholder"} variant="outlined" id={id} {...others} />
            </form>
        </NoSsr>
    );
}

export default InputGradient;

/*
const styles = {
    root: {
        padding: '2px',
        background: "#f00"
    }
}
function InputGradient(props) {
    const { classes, children, className, colors, ...others } = props;

    return (
        <NoSsr>
            <form noValidate autoComplete="off">
                <StyledInput className={clsx(classes.root, className, "input-grad")} label="Deterministic" variant="outlined" id="deterministic-outlined-input" {...others} />
            </form>
        </NoSsr>
    );
}

export default withStyles(styles)(InputGradient);
*/


