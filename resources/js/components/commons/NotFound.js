import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGradient from './ButtonGradient';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%,-50%)"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NotFound({ match }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1">
        What is 404 ? <br /> Not Found XD
      </Typography>
    </div>
  );
}
