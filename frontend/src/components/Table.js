import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  function D() { return false }
  const conditional = props.conditional || D


  const classes = useStyles();
  const { rows, headers } = props;
  const fieldNames = Object.keys(rows[0]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, idx) => (
              <TableCell align="left" key={idx}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {fieldNames.map((field) => {
                return conditional(row[field]) ?
                  <props.effect text={row[field]} />
                  :
                  <TableCell align="left">{row[field]}</TableCell>
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// {<TableCell className = {row.user_response==='ACCEPT'? classes.green : row.user_response==='DECLINE'? classes.red : null} align="left">{row.user_response}
