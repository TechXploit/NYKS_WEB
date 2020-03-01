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

  const { myLabel, selectItems, id, className, labelId, ...others } = props;

  const [selectedValue, setMyValue] = React.useState('');

  const select = (
    <FormControl variant="filled" className={classes.formControl}>
      <Select
        labelId={labelId || "Label"}
        id={id}
        value={selectedValue.length !== 0 ? selectedValue : myLabel}
        variant={"outlined"}
        className={clsx(className, "input-select")}
        onChange={function (event) { return setMyValue(event.target.value); }}
        {...others}
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
  )

  return [selectedValue, select];
}
