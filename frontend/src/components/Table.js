import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, firstName, lastName, startDateTime, endDateTime, message, notificationType, userResponse) {
  return { id, firstName, lastName, startDateTime, endDateTime, message, notificationType, userResponse };
}

const rows = [
  createData('1','Snow', 'Flake',"2020-10-27T04:05:06.717805Z", "2020-10-27T04:05:06.717805Z",'Yes', 'Text', 'Yes-Available to work'),
  createData('2', 'Jim', 'Jones', "2020-10-27T04:05:06.717805Z", "2020-10-27T04:05:06.717805Z",'Yes', 'Text', 'No -Been drinking')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Start Date Time</TableCell>
            <TableCell align="right">End Date Time</TableCell>
            <TableCell align="right">Message</TableCell>
            <TableCell align="right">Notification Type</TableCell>
            <TableCell align="right">Response</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.startDateTime}</TableCell>
              <TableCell align="right">{row.endDateTime}</TableCell>
              <TableCell align="right">{row.message}</TableCell>
              <TableCell align="right">{row.notificationType}</TableCell>
              <TableCell align="right">{row.userResponse}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
