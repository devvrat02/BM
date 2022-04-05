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


const data = [
  {
    id: "asdasd",
    Taskname: "User Portal",
    Status: "In Progress",
    Tag: "Web App",
    Timetrack: "8",
    Assign: [
      {
        name: "Anil",
        src: "assets/images/avatars/james.jpg"
      },
      {
        name: "Amok",
        src: "assets/images/avatars/garry.jpg"
      }
    ],
    Due: "DD.MM.YYYY",
  },
  {
    id: "adfsfsdasd",
    Taskname: "Ant Beta",
    Status: "In Progress",
    Tag: "IOS",
    Timetrack: "8",
    Assign: [
      {
        name: "Richard",
        src: "assets/images/avatars/andrew.jpg"
      },
      {
        name: "Shivam",
        src: "assets/images/avatars/james.jpg"
      },
      {
        name: "Piyush",
        src: "assets/images/avatars/garry.jpg"
      }
    ],
    Due: "DD.MM.YYYY",
  },
  {
    Taskname: "Admin Portal",
    Status: "Complete",
    Tag: "Internal Application",
    Timetrack: "12",
    Assign: [
      {
        name: "Nitish",
        src: "assets/images/avatars/katherine.jpg"
      },
      {
        name: "Nilaam",
        src: "assets/images/avatars/garry.jpg"
      }
    ],
    Due: "DD.MM.YYYY",
  },
  {
    id: "adfsasdffsdasd",
    Taskname: "Market Watch",
    Status: "Pending",
    Tag: "Thick Client",
    Timetrack: "18",
    Assign: [
      {
        name: "Adhiraj",
        src: "assets/images/avatars/garry.jpg"
      },
      {
        name: "Geet",
        src: "assets/images/avatars/james.jpg"
      }
    ],
    Due: "DD.MM.YYYY",
  },
  {
    id: "adfsfsdafsdasd",
    Taskname: "Booking Portal",
    Status: "Pending",
    Tag: "Android",
    Timetrack: "3",
    Assign: [
      {
        name: "Unknown",
        src: "assets/images/avatars/james.jpg"
      },
      {
        name: "Anil",
        src: "assets/images/avatars/katherine.jpg"
      }
    ],
    Due: "DD.MM.YYYY",
  },
];


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
