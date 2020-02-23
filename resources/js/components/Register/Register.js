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
        marginTop: theme.spacing(15),
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

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                    <InputGradient
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="off"
                    />

                    <InputGradient
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="off"
                    />

                    <InputGradient
                        required
                        fullWidth
                        id="Phone"
                        label="Phone"
                        name="Phone"
                        autoComplete="off"
                    />

                    <SelectGradient
                        required
                        fullWidth
                        id="department"
                        myLabel="Select Department"
                        name="Department"
                        autoComplete="off"
                        selectItems={[
                            { id: 1, value: "IT" },
                            { id: 2, value: "System Analyst" },
                            { id: 3, value: "Design" },
                            { id: 4, value: "Marketing" },
                        ]}
                    />

                    <SelectGradient
                        required
                        fullWidth
                        id="designation"
                        myLabel="Select Designation"
                        name="Designation"
                        autoComplete="off"
                        selectItems={[
                            { id: 1, value: "IT" },
                            { id: 2, value: "System Analyst" },
                            { id: 3, value: "Design" },
                            { id: 4, value: "Marketing" },
                        ]}
                    />
                    <TimePicker
                        label="Start time"
                    />
                    <TimePicker
                        label="End time"
                    />
                    <InputGradient
                        required
                        fullWidth
                        name="Createpassword"
                        label="Create Password"
                        // type="password"
                        id="Createpassword"
                        autoComplete="current-password"
                    />
                    <InputGradient
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        // type="password"
                        id="Confirm password"
                        autoComplete="current-password"
                    />

                    <ButtonGradient
                        // disabled
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