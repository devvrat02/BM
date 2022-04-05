import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import StatusColor from './StatusColor';
import { Button, Menu, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const columns = [
  { id: 'Assests', label: 'Assets', minWidth: 50 },
  { id: 'Risk', label: 'Risk', minWidth: 50 },
  { id: 'Status', label: 'Status', minWidth: 50 },
];

function createData(Assets, risk, Status) {

  return { Assets, risk, Status };
}

const rows = [
  createData('assets.securitybulls.com', 'Sql Injection', 'RESOLVED'),
  createData('admin.securitybulls.com', 'Stored XSS', 'Need Attention'),
  createData('app.securitybulls.com', 'Information Disclosure', 'RESOLVED'),
  createData('web.securitybulls.com', 'Option Method Allowed', 'RESOLVED'),
  createData('load.securitybulls.com', 'Data Discloser', 'Need Attention'),
  createData('db.securitybulls.com', 'Sql Injection', 'Need Attention'),
  createData('query.securitybulls.com', 'Sql Injection', 'Need Attention'),
  createData('support.securitybulls.com', 'Sql Injection', 'RESOLVED'),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
var asst = rows.filter((rows, index, self) =>
  index === self.findIndex((t) => (t.Assets === rows.Assets)))

function Asset(props) {


  const [open, setOpen] = React.useState(false);

  const [Assets, setAsset] = React.useState('');
  const [Status, setStatus] = React.useState('');

  const handleChangeasset = (event) => {
    setAsset(event.target.value)
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value)
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };


  const filterdt = (Assets == "") && (Status == "") ?
    rows : (Assets != "") && (Status == "") ? rows.filter(row => row.Assets == Assets) :
      (Assets == "") && (Status != "") ? rows.filter(row => row.Status == Status) :
        rows.filter(row => (row.Assets == Assets) && (row.Status == Status));
  return (
    <Paper className="w-full overflow-hidden" sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' }
    }} variant="outlined" square>
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">Vulnerabilities Status</Typography>
        <div>
          <div >
            <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "20px", color: "#FFFFFF" }} onClick={handleClickOpen} >+ Filter</Button>
            <>
              <Dialog disableEscapeKeyDown open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
                <DialogContent>
                  <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }} >
                    <FormControl sx={{ m: 1, minWidth: 255 }}>
                      <InputLabel id="demo-dialog-select-label">Vulnerabilities Status</InputLabel>
                      <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={Assets}
                        onChange={handleChangeasset}
                        input={<OutlinedInput label="Assets" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {asst.map((option) => (
                          <MenuItem key={option.Assets} value={option.Assets}  >
                            {option.Assets}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-dialog-select-label">Status</InputLabel>
                      <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={Status}
                        onChange={handleChangeStatus}
                        input={<OutlinedInput label="Status" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"RESOLVED"}>RESOLVED</MenuItem>
                        <MenuItem value={"Need Attention"}>Need Attention</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
              </Dialog>
            </>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth, color: "#FFFFFF" }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filterdt.map((row) => (
                <TableRow key={row.Assets}>
                  <TableCell align="center">{row.Assets}</TableCell>
                  <TableCell align="center">{row.risk}  </TableCell>
                  <TableCell align="center"><StatusColor name={row.Status} /> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
}
export default Asset;