import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  const { rows, headers } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, idx) => (
              <TableCell align="left" key={idx}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.start_date_time}</TableCell>
              <TableCell align="left">{row.notification_type}</TableCell>
              <TableCell align="left">{row.message}</TableCell>
              <TableCell align="left">{row.manager}</TableCell>
              <TableCell align="left">{row.user_response}</TableCell>
              <TableCell align="left">
                {row.completed ? "Completed" : "Not completed"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
