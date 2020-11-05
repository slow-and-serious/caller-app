import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  greenText: {
    color: "limegreen",
  },
  redText: {
    color: "red",
  },
  headerText: {
    fontWeight: "bold",
  },
});

export default function BasicTable(props) {
  function D() {
    return false;
  }
  const conditional = props.conditional || D;

  const classes = useStyles();
  const { rows, headers } = props;
  const fieldNames = Object.keys(rows[0]);
  console.log(props.rows);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, idx) => (
              <TableCell
                align="center"
                key={idx}
                className={classes.headerText}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {fieldNames.map((field, idx) => {
                let color = conditional(row[field]);
                return field === "button" ? (
                  <TableCell>
                    <IconButton
                      component={NavLink}
                      to={row["button"]}
                      size="small"
                      variant="outlined"
                      color="primary"
                    >
                      <InfoIcon />
                    </IconButton>
                  </TableCell>
                ) : color ? (
                  <TableCell
                    align="center"
                    className={
                      color === "green" ? classes.greenText : classes.redText
                    }
                    key={idx}
                  >
                    {color === "green" ? (
                      <CheckCircleOutlineIcon />
                    ) : (
                      <CancelIcon />
                    )}
                    <br /> {row[field]}
                  </TableCell>
                ) : (
                  <TableCell align="center" key={idx}>
                    {row[field]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
