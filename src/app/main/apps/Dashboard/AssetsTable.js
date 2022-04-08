import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import RiskColor, { Riskstate } from './Riskcolor';
import { styled } from '@mui/material/styles';
import { Button, Menu, Typography } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';


import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Asssets } from './Data';
const columns = [
  { id: 'Assests', label: 'Assets', minWidth: 50 },
  { id: 'Risk', label: 'Risk', minWidth: 50 },
];

function createData(assets, risk, val = 0) {
  if (risk == 'CRITICAL') { val = 10; } if (risk == 'HIGH') { val = 8; } if (risk == 'MEDIUM') { val = 5; }
  return { assets, risk, val };
}

const rows = JSON.parse(JSON.stringify(Asssets));
const srows = rows.slice().sort((a, b) => b.val - a.val);;

const risks = [
  {
    value: 'CRITICAL',
    label: 'CRITICAL',
  },
  {
    value: 'HIGH',
    label: 'HIGH',
  },
  {
    value: 'MEDIUM',
    label: 'MEDIUM',
  },
  {
    value: 'LOW',
    label: 'LOW',
  },
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
function AssetsTable(props) {
  const [risk, setRisk] = React.useState('');
  const [open, setOpen] = React.useState(false);


  const handleChange = (event) => {

    setRisk(event.target.value)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {

    setOpen(false);

  };
  const filterdata = srows.filter((risk == "") ? row => true : row => row.risk == risk);
  return (
    <Paper className="w-full overflow-hidden " sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }} variant="outlined" square>
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">Assets Prioritization</Typography>
        <div>
          <div >
            <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "20px", color: "#FFFFFF" }} onClick={handleClickOpen} >+ Filter</Button>
            <>
              <Dialog open={open} onClose={handleClose} bodystyle={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
                <DialogContent>
                  <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'transparent' }}>
                    <FormControl sx={{ m: 1, minWidth: 300, minHeight: 10 }}>
                      <InputLabel id="demo-dialog-select-label">Risk</InputLabel>
                      <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={risk}
                        onChange={handleChange}
                        input={<OutlinedInput label="Risk" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {risks.map((option) => (
                          <MenuItem key={option.value} value={option.value} onClick={handleChange, handleClose} >
                            {option.label}
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
            {/* <ATtable rows={rows} risk={risk} /> */}
            <TableBody>
              {filterdata.map((row) => (
                <TableRow key={row.assets}>
                  <TableCell align="center">{row.assets}</TableCell>
                  <TableCell align="center"><RiskColor name={row.risk} /> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
}
export default (AssetsTable);