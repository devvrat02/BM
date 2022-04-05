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
import RemoveCircleIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BarChartIcon from '@mui/icons-material/BarChart';


import VulBox from './VulBox';
import SevBttn from './SevBttn';
import Bttn from './Bttn';
import { Button, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, Navigate, useNavigate } from "react-router-dom";

const Data = [
  {
    id: "asdadsadsadaf-fsfsfd-dfsdf",
    Target: 'app.securitybulls.com',
    Vulnerability: 'Remote Code Execution',
    CWEname: 'CWE-94',
    CWEvalue: 'CWE-269 : Improper Privilege Management',
    CVSSname: '9.8',
    CVSSvalue: '9.9{CVSS:3.0}/AV:N/AC:l/PR:L/UI:N/S:C/C:H/I:H/A:H',
    Severity: 'Critical',
    Statusname: 'Fixed',
    Statusvalue: 'Need Attention',
    report: 'Securitybulls Team Management Portal',
    Description: 'The software does not properly assign, modify, track, or check privileges for an actor, creating an unintended sphere of control for that actor.',
    Impact: 'Gain Privileges or Assume Identity',
    Remedy: ''
  },
  {
    id: "fsfsfd-dfsdf",
    Target: 'admin.securitybulls.com',
    Vulnerability: 'Server Side Execution',
    CWEname: 'CWE-XXX',
    CWEvalue: 'CWE-269 : Improper Input Validation',
    CVSSname: '7.5',
    CVSSvalue: '7.5{CVSS:3.0}/PR:L/UI:N/S:C/C:H/I:H/A:H',
    Severity: 'Low',
    Statusname: 'In Progress',
    Statusvalue: 'Need Attention',
    report: 'Securitybulls Team Management Portal',
    Description: 'The product receives input or data, but it does not validate or incorrectly validates that the input has the properties that are required to process the data safely and correctly.\ ',
    Impact: 'DoS: Crash, Exit, or Restart; DoS: Resource Consumption (CPU); DoS: Resource Consumption (Memory) An attacker could provide unexpected values and cause a program crash or excessive consumption of resources, such as memory and CPU.',
    Remedy: 'While they don’t address the root cause of IDOR vulnerabilities, there are a few ways to mitigate the risk posed by direct references. The first approach is to replace them with indirect object references that are then internally mapped to actual objects. This could mean using a temporary per-session reference map populated only with values valid for a specific user and associated with random, non-sequential keys.\
    Using secure hashes instead of actual object references is another way to make it harder for attackers to tamper with user-controllable values. See the OWASP IDOR Prevention Cheat Sheet for detailed recommendations on replacing direct identifiers with secure salted hashes.\
    Both these methods are effective at hiding internal implementation details but don’t address the underlying access control issue. A more robust approach to eliminating IDOR vulnerabilities is to ensure proper session management and object-level user access control checks. That way, even if a determined attacker manages to discover an internal object reference and manipulate it, they will not obtain unauthorized access.'
  },
  {
    id: "a-dfsdf",
    Target: 'asset.securitybulls.com',
    Vulnerability: 'Insecure Direct Object Reference',
    CWEname: 'CWE-94',
    CWEvalue: 'CWE-269 : Improper Privilege Management',
    CVSSname: '3.1',
    CVSSvalue: '9.9{CVSS:3.0}/AV:N/AC:l/PR:L/UI:N/C:H/I:H/A:H',
    Severity: 'High',
    Statusname: 'Reproducible',
    Statusvalue: 'Need Attention',
    report: 'Securitybulls Team Management Portal',
    Description: 'The software does not properly assign, modify, track, or check privileges for an actor, creating an unintended sphere of control for that actor.',
    Impact: 'Gain Privileges or Assume Identity',
    Remedy: ''
  },
  {
    id: "asdadsadsadaf-fsfsdf",
    Target: 'app.securitybulls.com',
    Vulnerability: 'Remote Code Execution',
    CWEname: 'CWE-94',
    CWEvalue: 'CWE-94 :Improper Control of Generation of Code (\'Code Injection\')',
    CVSSname: '9.8',
    CVSSvalue: '9.9{CVSS:3.0}/AV:N/AC:l/PR:L/UI:N/S:C/C:H/I:H/A:H',
    Severity: 'Info',
    Statusname: 'Fixed',
    Statusvalue: 'Need Attention',
    report: 'Securitybulls Team Management Portal',
    Description: 'The software constructs all or part of a code segment using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the syntax or behavior of the intended code segment.',
    Impact: ' Bypass Protection Mechanism <br > In some cases, injectable code controls authentication; this may lead to a remote vulnerability.',
    Remedy: ''
  },
  {
    id: "asdadsads-dfsdf",
    Target: 'app.securitybulls.com',
    Vulnerability: 'SQL Injection',
    CWEname: 'CWE-89',
    CWEvalue: 'CWE-89: Improper Neutralization of Special Elements',
    CVSSname: '9.6',
    CVSSvalue: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:L',
    Severity: 'Critical',
    Statusname: 'Fixed',
    Statusvalue: 'Fixed',
    report: 'Securitybulls Team Management Portal',
    Description: 'The application fails validating user input while querying to database within standard structured query language. An attacker who can exploit such a vulnerability can read, modify and execute administration operations on the database. Time based SQL injections were performed on the website, to avoid any disruption to the production environment, minimal SQL payload queries were executed for generating proof of concept.',
    Impact: 'An attacker can view, add, delete or modify information stored in the database with privileges of the current database user. In case of web application this weakness often leads to a website deface or a database exfiltration.\
    Insecure configuration of database may allow an attacker to write files into arbitrary locations on the system (e.g. SELECT ... INTO OUTFILE construction in MySQL), which might lead to system compromise.\
    Modern SQL injections are being used to spread malware, they can be leveraged to turn innocent websites into drive-by-download sites, which will serve malware to unsuspecting visitors.',
    Remedy: 'In order to prevent SQL Injection, following things should be kept in mind\n' +
      '• Use of Prepared Statements\n' +
      '• Use of Stored Procedures\n' +
      '• White List Input Validation\n' +
      '• Escaping special characters from User Supplied Input',
  },

];
const expt = [
  {
    value: 'pdf',
    label: 'PDF',
  },
  {
    value: 'Excel',
    label: 'Excel',
  },
  {
    value: 'csv',
    label: 'csv',
  },
];
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();
  const routeChange = (value) => {
    let path = `/apps/vulnerabilities/VulReport`;
    navigate(path, { state: value });
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveCircleIcon /> : <AddCircleOutlineIcon color="secondary" />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center"  >
          {row.Target}
        </TableCell>
        <TableCell align="center">{row.Vulnerability}</TableCell>
        <TableCell align="center">{row.CWEname}</TableCell>
        <TableCell align="center"><Bttn name={row.CVSSname} /></TableCell>
        <TableCell align="center"><SevBttn name={row.Severity} /> </TableCell>
        <TableCell align="center"><SevBttn name={row.Statusname} /></TableCell>
        <TableCell > <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => routeChange(row)}
        ><ArrowRightIcon />
        </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>

            <Typography variant="h6" gutterBottom component="div">
              <BarChartIcon />Summary
            </Typography>
            <VulBox Data={row} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

var asst = Data.filter((Data, index, self) =>
  index === self.findIndex((t) => (t.Target === Data.Target)))





export default function Vulnerabilities() {
  const [risk, setRisk] = React.useState('');
  const [Target, setTarget] = React.useState('');
  const [Status, setStatus] = React.useState('');
  const [openex, setOpenex] = React.useState(false);

  const handleChangeTarget = (event) => {
    setTarget(event.target.value)
  };
  const handleChangestatus = (event) => {
    setStatus(event.target.value)
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  const handleCloseex = (event, reason) => {
    setOpenex(false);
  };

  const [open, setOpen] = React.useState(false);

  const fileexport = (event) => {
    // setExpt(event.target.value)
    // export 
  };

  const handleChange = (event) => {
    setRisk(event.target.value)
  };
  const handleChangeex = (event) => {
    setExpt(event.target.value)
  };


  const handleClickOpenExport = () => {
    setOpenex(true);
  };

  const filterData = (Target == "") && (Status == "") ?
    Data : (Target != "") && (Status == "") ? Data.filter(row => row.Target == Target) :
      (Target == "") && (Status != "") ? Data.filter(row => row.Statusname == Status) :
        Data.filter(row => (row.Target == Target) && (row.Statusname == Status));

  return (
    <Paper className="w-full shadow overflow-hidden " variant="outlined" square>
      <div className="flex items-center justify-between p-20 h-64">
        <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "20px", color: "#FFFFFF" }} onClick={handleClickOpenExport} >
          Export
        </Button>
        <Dialog open={openex} onClose={handleCloseex} bodystyle={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
          <DialogContent>
            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'transparent' }}>
              <FormControl sx={{ m: 1, minWidth: 300, minHeight: 10 }}>
                <InputLabel id="demo-dialog-select-label">Export</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={risk}
                  onChange={fileexport}
                  input={<OutlinedInput label="Export" />}
                >
                  <MenuItem key={"pdf"} value={"pdf"} onClick={fileexport} >
                    PDF
                  </MenuItem>
                  <MenuItem key={"csv"} value={"csv"} onClick={fileexport} >
                    CSV
                  </MenuItem>

                </Select>
              </FormControl>
            </Box>
          </DialogContent>
        </Dialog>
        <div >
          <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "20px", color: "#FFFFFF" }} onClick={handleClickOpen} >+ Filter</Button>
          <>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
              <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }} >
                  <FormControl sx={{ m: 1, minWidth: 255 }}>
                    <InputLabel id="Target">Target</InputLabel>
                    <Select
                      labelId="Target-label"
                      id="Target-select"
                      value={Target}
                      onChange={handleChangeTarget}
                      input={<OutlinedInput label="Target" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {asst.map((op) => (
                        <MenuItem key={op.Target} value={op.Target}  >
                          {op.Target}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 255 }}>
                    <InputLabel id="demo-dialog-select-label">Status</InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select"
                      value={Status}
                      onChange={handleChangestatus}
                      input={<OutlinedInput label="Status" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem key={"Fixed"} value={"Fixed"}>Fixed</MenuItem>
                      <MenuItem key={"Solved"} value={"Solved"}>Solved</MenuItem>
                      <MenuItem key={"Reproducible"} value={"Reproducible"}>Reproducible</MenuItem>
                      <MenuItem key={"In Progress"} value={"In Progress"}>In Progress</MenuItem>
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
      <TableContainer component={Paper} square>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Target</TableCell>
              <TableCell align="center">Vulnerability</TableCell>
              <TableCell align="center">CWE/OWASP</TableCell>
              <TableCell align="center">CVSS</TableCell>
              <TableCell align="center">Severity</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}