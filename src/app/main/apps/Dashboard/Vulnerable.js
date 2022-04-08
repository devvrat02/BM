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
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button, Menu, Typography } from '@mui/material';
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
  { id: 'Discovered', label: 'Discovered', minWidth: 50 },
];

const rows = [
  { Assets: 'assets.securitybulls.com', Risk: 'Sql Injection', Discovered: '10 sec' },
  { Assets: 'admin.securitybulls.com', Risk: 'Stored XSS', Discovered: '1 min' },
  { Assets: 'app.securitybulls.com', Risk: 'Information Disclosure', Discovered: '1 Hour' },
  { Assets: 'web.securitybulls.com', Risk: 'Option Method Allowed', Discovered: '25 min' },
  { Assets: 'load.securitybulls.com', Risk: 'Data Discloser', Discovered: '20 days' },
  { Assets: 'db.securitybulls.com', Risk: 'Sql Injection', Discovered: '25 sec' },
  { Assets: 'query.securitybulls.com', Risk: 'Sql Injection', Discovered: '25 min' },
  { Assets: 'support.securitybulls.com', Risk: 'Sql Injection', Discovered: '25 min' },
]
const risks = [
  {
    value: 'Sql Injection',
    label: 'Sql Injection',
  },
  {
    value: 'Stored XSS',
    label: 'Stored XSS',
  },
  {
    value: 'Information Disclosure',
    label: 'Information Disclosure',
  },
  {
    value: 'Option Method Allowed',
    label: 'Option Method Allowed',
  },
];
var asst = rows.filter((rows, index, self) =>
  index === self.findIndex((t) => (t.Assets === rows.Assets)))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
function Vulnerable(props) {
  const [risk, setRisk] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [Asset, setAsset] = React.useState('');

  const handleChangeasset = (event) => {
    setAsset(event.target.value)
  };

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
    setRisk(event.target.value)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {

    setOpen(false);

  };
  const filterdata = rows.filter((Asset == "") ? row => true : row => row.Assets == Asset);
  return (

    <Paper className="w-full overflow-hidden" sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }} variant="outlined" square>
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">Vulnerabilities Feeds</Typography>
        <div>
          <div >
            <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "20px", color: "#FFFFFF" }} onClick={handleClickOpen} >+ Filter</Button>
            <>
              <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogContent>
                  <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }} >
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-dialog-select-label">Assets</InputLabel>
                      <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={Asset}
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
                  </Box>
                </DialogContent>
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
              {filterdata.map((row) => (
                <TableRow key={row.Assets}>
                  <TableCell align="center">{row.Assets}</TableCell>
                  <TableCell component="th" align="center">{row.Risk}  </TableCell>
                  <TableCell align="center">{row.Discovered}  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper >
  );
}
export default (Vulnerable);