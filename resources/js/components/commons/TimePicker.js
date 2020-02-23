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
    width: "100%"
  },
  "MuiInput-underline": {
    "&:after": {
      borderColor: "transparent",
      background: ('linear-gradient(90deg,'
        + theme.palette.primary.main
        + ' 0%,'
        + theme.palette.secondary.main
        + ' 100%)')
    }
  }
}));


export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const { label } = props

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label={label || "TimePicker"}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          className={clsx(classes.root, classes["MuiInput-underline"])}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
