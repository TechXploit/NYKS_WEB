import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Color from 'color';


const useStyles = makeStyles(function (theme) {
  return {
    root: {
      width: '100%',

      padding: 2,
      background: ('linear-gradient(90deg,'
        + Color(theme.palette.primary.main).alpha(1).string()
        + ' 0%,'
        + Color(theme.palette.secondary.main).alpha(1).string()
        + ' 100%)'),
    },
    container: {
      maxHeight: 440,
    },
    rowHover: {
      "&:hover": {
        backgroundColor: "transparent",
      }
    },
    tableMain: {
      backgroundColor: theme.palette.background.default
    }
  }
});

export default function StickyHeadTable(props) {
  const { columns, rows, rowsPerPageOptions } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" className={classes.tableMain}>
          <TableHead>
            <TableRow>
              {
                columns ?
                  (columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: 170 }}
                    >
                      {column.label}
                    </TableCell>
                  )))
                  : null
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows ?
              rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow hover role="checkbox" className={classes.rowHover} tabIndex={-1} key={row.code}>
                    {
                      columns ?
                        columns.map(column => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })
                        : null
                    }
                  </TableRow>
                );
              })
              : null
            }
          </TableBody>
        </Table>
      </TableContainer>
      {
        (rows && columns) ?
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            className={classes.tableMain}
          />
          : null
      }
    </Paper>
  );
}
