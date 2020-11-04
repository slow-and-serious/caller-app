import {
  Button,
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
  greenText: {
    color: "limegreen",
  },
  redText: {
    color: "red"
  }
});

export default function BasicTable(props) {
  function D() {
    return false;
  }
  const conditional = props.conditional || D;

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
              {fieldNames.map((field, idx) => {
                let color = conditional(row[field])
                return color ? (
                  <TableCell align="left" className={color === 'green' ? classes.greenText : classes.redText} key={idx}>
                    {row[field]}
                  </TableCell>
                ) : (
                  <TableCell align="left" key={idx}>{row[field]}</TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
