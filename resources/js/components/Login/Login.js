import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MUILink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputGradient from '../commons/InputGradient';
import ButtonGradient from '../commons/ButtonGradient';
import { Link } from 'react-router-dom';
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

export default function Login() {
    const classes = useStyles();

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

    
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    {emailInput}
                    {passwordInput}
                    <Grid container className={classes.spacingRow} alignItems="center">
                        <Grid item xs>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item>
                            <MUILink href="#" color="inherit" variant="body2" className={classes.forgotPassword}>
                                Forgot password?
                            </MUILink>
                        </Grid>
                    </Grid>
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

                    
                    <MUILink component={Link} to="/register" color="inherit" variant="body2" className="text-center">
                        {"Don't have an account? Sign Up"}
                    </MUILink>
                </form>
            </div>

        </Container>
    );
}
