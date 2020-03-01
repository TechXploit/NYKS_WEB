import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& .MuiInput-underline": {
      "&:after": {
        borderBottom: "none",
        height: 2,
        background: ('linear-gradient(90deg,'
          + theme.palette.primary.main
          + ' 0%,'
          + theme.palette.secondary.main
          + ' 100%)')
      }
    },
  },

}));


export default function TimePicker(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const { label, id, className } = props
  const picker = (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid>
        <KeyboardTimePicker
          margin="normal"
          id={id || "time-picker"}
          label={label || "TimePicker"}
          value={selectedDate}
          onChange={function (date) { return setSelectedDate(date); }}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          className={classes.root}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );

  return [selectedDate, picker];
}
