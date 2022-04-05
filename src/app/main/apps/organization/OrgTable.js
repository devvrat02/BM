import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import firebase from 'firebase/compat/app';

var data = firebase.database().ref().child('PentList/Org');

function Row(props) {
  const row = props.rows;
  const [Add, changeAdd] = React.useState(row.status);
  const changeState = () => {
    changeAdd("Occupied");
  };
  const changeStateADD = () => {
    changeAdd("Add");
  };

  return (
    <TableRow key={row.name} className="h-64">
      <TableCell component="th" scope="row" value={row.avatar} className="px-16">
        <Avatar src={row.avatar} />
      </TableCell>
      <TableCell component="th" scope="row" className="truncate font-semibold">
        {row.name}
      </TableCell>
      <TableCell align="center" component="th" scope="row" className="truncate">
        {row.experience}
      </TableCell>
      <TableCell align="center" component="th" scope="row" className="truncate">
        {row.charge}
      </TableCell>
      <TableCell align="center" component="th" scope="row" className="truncate">
        {row.certificate}
      </TableCell>
      <TableCell align="center" value={row.status} component="th" scope="row" className="truncate">
        {(Add == 'Add') ? <>   <Button variant="contained" color="success" onClick={changeState}>
          {Add}
        </Button></> : <>   <Button variant="contained" color="warning" onClick={changeStateADD}>
          {Add}
        </Button></>}

      </TableCell>
    </TableRow>
  );
}

function OrgTable() {

  const [rows, setRows] = React.useState([])
  React.useEffect(() => {
    data.on('value', snap => {
      let val = JSON.parse(JSON.stringify(snap.val()));
      console.log("data", val);
      setRows(
        val
      );
    });
  }, []);

  return (
    <div className="p-24">
      <Paper className="w-full rounded-10 shadow overflow-hidden" variant="outlined" square>
        <div className="flex items-center justify-between p-20 h-64">
          <Typography className="text-16 font-medium">Members</Typography>
        </div>
        <div className="table-responsive">
          <Table className="w-full min-w-full" size="small">
            <TableHead>
              <TableRow>
                <TableCell className="whitespace-nowrap p-8 px-16">

                </TableCell>


                <TableCell >
                  <Typography
                    color="textSecondary"
                    className="font-semibold sm:justify-start whitespace-nowrap p-8 px-16"
                  >
                    Name
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    color="textSecondary"
                    className="font-semibold  justify-start  whitespace-nowrap p-8 px-16"
                  >
                    Experience
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    color="textSecondary"
                    className="font-semibold whitespace-nowrap p-8 px-16"
                  >
                    Charges
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    color="textSecondary"
                    className="font-semibold whitespace-nowrap p-8 px-16"
                  >
                    Certificates
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    color="textSecondary"
                    className="font-semibold whitespace-nowrap p-8 px-16"
                  >
                    Status
                  </Typography>
                </TableCell>



              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <Row rows={row} key={row.name} />
              ))}
            </TableBody>

          </Table>
        </div>
      </Paper>
    </div>
  );


}

export default React.memo(OrgTable);