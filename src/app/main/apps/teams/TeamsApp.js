import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import RiskColor from './Riskcolor';
import Riskfont from './Riskfont';
import Tag from './Tag';
import Asset from '../analytics/Asset';
import { Data } from './Data';


const data = JSON.parse(JSON.stringify(Data));


const coloumn = [
  {
    name: "Task Name",
    align: "left",
    value: "task",
    class: "",
    minWidth: 170,
  },
  {
    name: "Status",
    align: "justify",
    value: "status",
    class: "pl-40",
    minWidth: 170,
  },
  {
    name: "Tag",
    align: "center",
    value: "tag",
    class: "",
    minWidth: 170,
  },
  {
    name: "Time Track",
    align: "center",
    value: "time",
    class: "",
    minWidth: 170,
  },
  {
    name: "Assigned",
    align: "right",
    value: "Assignee",
    class: "ml-40",
    minWidth: 170,
  },
  {
    name: "Due Date",
    align: "center",
    value: "duedate",
    class: "ml-40",
    minWidth: 170,
  },

];


function Avt(props) {

  return (<>

    <AvatarGroup max={4}>
      {props.data.map((row) => (

        <Avatar key={row.name} alt={row.name} src={row.src} />
      ))}

    </AvatarGroup>


  </>);


}




function Row(props) {
  const { row } = props;
  return (<>
    <TableRow >

      <TableCell></TableCell>
      <TableCell><CheckCircleOutlineIcon /></TableCell>
      <TableCell align="left">{row.Taskname}</TableCell>
      <TableCell align="center"><RiskColor name={row.Status} /></TableCell>
      <TableCell align="center"><Tag name={row.Tag} /> </TableCell>
      <TableCell align="center">{row.Timetrack}  Engineering Days</TableCell>
      <TableCell align="left"><Avt data={row.Assign} /></TableCell>
      <TableCell align="center"><Riskfont name={row.Status} value={row.Due} /></TableCell>

    </TableRow>

    <TableRow >

      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>

    </TableRow>

  </>
  );
}

function TeamsApp() {

  return (


    <Paper sx={{ overflow: 'hidden' }} square>
      <div className="flex items-center justify-between p-20 h-64"> </div>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>

              {coloumn.map((col) => (
                <TableCell
                  key={col.name}
                  className={col.class}
                  align={col.align}
                  style={{ minWidth: col.minWidth }}
                >
                  {col.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow >
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>

            </TableRow>

            {data.map((row) => (
              <Row key={row.Taskname} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>


  );
}

export default TeamsApp;
