import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputGradient from '../commons/InputGradient';
import ButtonGradient from '../commons/ButtonGradient';
import SelectGradient from '../commons/SelectGradient';
import TimePicker from '../commons/TimePicker';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(15, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 20px',
        border: '1px solid #aaa',
        borderRadius: '8px',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
    spacingRow: {
        marginTop: theme.spacing(1),
    },
    forgotPassword: {
        verticalAlign: "middle"
    }
}));

export default function Register() {
    const classes = useStyles();

    //  Text Box Hooks
    const [name, nameInput] = InputGradient({
        required: true,
        fullWidth: true,
        id: 'name',
        label: "Name",
        autoComplete: "off"
    });
    const [email, emailInput] = InputGradient({
        type: 'email',
        required: true,
        fullWidth: true,
        id: 'email',
        label: "Email Address",
        autoComplete: "off"
    });

    const [password, passwordInput] = InputGradient({
        type: 'password',
        required: true,
        fullWidth: true,
        id: "password",
        label: "Password",
        autoComplete: "off"
    });

    const [confirm_password, confirm_passwordInput] = InputGradient({
        type: 'password',
        required: true,
        fullWidth: true,
        id: "confirm_password",
        label: "Confirm Password",
        autoComplete: "off"
    });


    const [phone, phoneInput] = InputGradient({
        type: 'number',
        required: true,
        fullWidth: true,
        id: "phone",
        label: "Phone",
        autoComplete: "off",
    });
    //  Select Component Hooks
    const [department, departmentInput] = SelectGradient({
        type: 'number',
        required: true,
        fullWidth: true,
        id: "department",
        myLabel: "Select Department",
        autoComplete: "off",
        selectItems: [
            { id: 1, value: "IT" },
            { id: 2, value: "System Analyst" },
            { id: 3, value: "Design" },
            { id: 4, value: "Marketing" },
        ],
    });
    const [designation, designationInput] = SelectGradient({
        type: 'number',
        required: true,
        fullWidth: true,
        id: "designation",
        myLabel: "Select Designation",
        autoComplete: "off",
        selectItems: [
            { id: 1, value: "IT" },
            { id: 2, value: "System Analyst" },
            { id: 3, value: "Design" },
            { id: 4, value: "Marketing" },
        ],
    });

    // Time Picker Hooks


    const [startTime, startTimeInput] = TimePicker({
        id: "startTime",
        label: "Start time",
    });
    const [endTime, endTimeInput] = TimePicker({
        id: "endTime",
        label: "End time",
    });


    const data = [name, phone, email, department, designation, password, confirm_password, startTime, endTime];
    console.log(data)
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                    {nameInput}
                    {phoneInput}
                    {emailInput}
                    {passwordInput}
                    {confirm_passwordInput}
                    {departmentInput}
                    {designationInput}
                    {startTimeInput}
                    {endTimeInput}


                    <ButtonGradient
                        fullWidth
                        className={classes.submit}
                        onClick={function () {
                            return console.log("Submitted")
                        }}
                        type="submit"
                    >
                        submit
                    </ButtonGradient>
                </form>
            </div>
        </Container>
    );
}