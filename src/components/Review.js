import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, Excerpt, More) {
  return { name, Excerpt, More };
}

const rows = [
  createData('Nomy', "it was good", 6.0),
  createData('Warrier', "bad experience", 9.0),
  createData('Elaxender', "Too good for society", 16.0),
  createData('pupchu', "not for students", 3.7),
  createData('enderson', "Good", 16.0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Basic() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
      <TableHead>
          <TableRow>
            <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell align="right">Excerpt&nbsp;</StyledTableCell>
            <StyledTableCell align="right">More&nbsp;</StyledTableCell>

          </TableRow>
      </TableHead>
      <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Excerpt}</StyledTableCell>
              <StyledTableCell align="right">{row.More}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}