import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: '100%',
  },
  root: {
    '&:hover': {
      borderColor: "transparent",
    }
  },
  label: {
    backgroundColor: "#fff"
  }
}));

export default function SelectGradient(props) {
  const classes = useStyles();
  const { className } = props
  const { myLabel, selectItems, } = props;

  const [myValue, setMyValue] = React.useState('');

  const handleChange = event => {
    setMyValue(event.target.value);
  };
  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          labelId="demo-SelectGradient-filled-label"
          id="demo-SelectGradient-filled"
          value={myValue.length !== 0 ? myValue : myLabel}
          variant={"outlined"}
          className={clsx(className, "input-select")}
          onChange={handleChange}
        >
          <MenuItem value={myLabel} disabled>
            <em>{myLabel}</em>
          </MenuItem>
          {
            selectItems
              ? selectItems.map(function (item) {
                return <MenuItem value={item.id} key={item.id}>{item.value}</MenuItem>
              })
              : null
          }
        </Select>
      </FormControl>
    </div>
  );
}
