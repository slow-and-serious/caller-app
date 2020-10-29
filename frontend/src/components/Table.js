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








// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', type: 'number', width: 70 },
//   { field: 'start_date_time', headerName: 'Start Date Time', type: 'number', width: 130 },
//   { field: 'end_date_time', headerName: 'End Date Time', type: 'number', width: 130 },
//   {
//     field: 'message',
//     headerName: 'Message',
//     type: '',
//     width: 90,
//   },

//   { field: 'notification_type',
//   headerName: 'Notification Type',
//   type: '',
//   width: 90,
//   },

//   { field: 'user_response',
//   headerName: 'Response',
//   type: '',
//   width: 90,
//   },

//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Flake', message: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', message: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', message: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', message: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', message: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, message: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', message: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', message: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', message: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//     </div>
//   );
// }


// const DATA = [
//   {
//     "id": 4,
//     "start_date_time": "2020-10-27T04:05:06.717805Z",
//     "end_date_time": "2020-10-27T04:05:06.717823Z",
//     "message": "test",
//     "notification_type": "TEXT",
//     "user_response": "ACCEPT"
//   }
// ]

//  // eslint-disable-next-line
// const Table = () => {
//   const [employees, setEmployees] = useState([])

//   useEffect(() => {
//     getData()
//   }, [])

//   const getData = async () => {

//     // const response = await axios.get(URL)
//     setEmployees(DATA)
//   }

//   const removeData = (id) => {

//     axios.delete(`${URL}/${id}`).then(res => {
//       const del = employees.filter(employee => id !== employee.id)
//       setEmployees(del)
//     })
//   }
//   function renderHeader() {
//     let headerElement = ['id', 'start_date_time', 'end_date_time', 'message', 'notification_type', 'user_response'];

//     return headerElement.map((key, index) => {
//       return <th key={index}>{key.toUpperCase()}</th>;
//     });

//   }
//   const renderBody = () => {
//     return employees && employees.map(({ id, start_date_time, end_date_time, message, notification_type, user_response }) => {
//       return (
//         <tr key={id}>
//           <td>{id}</td>
//           <td>{start_date_time}</td>
//           <td>{end_date_time}</td>
//           <td>{message}</td>
//           <td>{notification_type}</td>
//           <td>{user_response}</td>
//           <td className='operation'>
//             <button className='button' onClick={() => removeData(id)}>Delete</button>
//           </td>
//         </tr>
//       )
//     })
//   }

//   return (
//     <>
//       <h1 id='title'>React Table</h1>
//       <table id='employee'>
//         <thead>
//           <tr>{renderHeader()}</tr>
//         </thead>
//         <tbody>
//           {renderBody()}
//         </tbody>
//       </table>
//     </>
//   )
// }

// export default Table


