import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel'
import Icon from '@mui/material/Icon';
import { motion } from 'framer-motion';
import Input from '@mui/material/Input'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment'
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Integrate from './Integrate';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const teams = [
    {
        id: "1",
        name: "Aman",
        avt: "",
        email: "aman@securitybulls.com",
        role: "Admin",
    },
    {
        id: "2",
        name: "Geet",
        avt: "",
        email: "Geet@securitybulls.com",
        role: "Security Engineers",
    },
    {
        id: "3",
        name: "Shushant",
        avt: "",
        email: "Shushant@securitybulls.com",
        role: "Security Manager",
    },
    {
        id: "4",
        name: "Piyush",
        avt: "",
        email: "Piyush@securitybulls.com",
        role: "Security Engineers",
    },


]



function Setting() {

    const [open, setOpen] = React.useState(false);
    const [openMA, setOpenMA] = React.useState(false);
    const [team, setTeam] = React.useState(false);

    const handleTeamCLose = () => {
        setTeam(false);
    }

    const handleTeamOpen = () => {
        setTeam(true);
    }

    const handleMobOpen = () => {
        setOpen(true);
    };

    const handleMobClose = () => {
        setOpen(false);
    };


    const handleMAOpen = () => {
        setOpenMA(true);
    };

    const handleMAClose = () => {
        setOpenMA(false);
    };

    const [Status, setStatus] = React.useState('');

    const handleChangeStatus = (event) => {
        setStatus(event.target.outerText);

    };



    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openp = Boolean(anchorEl);
    const id = openp ? 'simple-popover' : undefined;


    const [Status2, setStatus2] = React.useState('');

    const handleChangeStatus2 = (event) => {
        setStatus2(event.target.outerText);
    };


    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const openr = Boolean(anchorEl2);
    const id2 = openr ? 'simple-popover' : undefined;

    return (<>
        <div >
            {/* Application  */}


            <List
                sx={{
                    width: '100%',
                    maxWidth: "80%",
                    bgcolor: 'background.paper',
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginTop: "2%"
                }}
            >
                <ListItem>
                    <ListItemText primary="Applications" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary="Mobile App" secondary="Connect the Mobile Application" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>

                        <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/mobile.png" alt="logo" />
                        {/* <BeachAccessIcon /> */}

                    </ListItemAvatar>
                    <ListItemText primary="Mobile Application" secondary="Connect Mobile Application" />
                    <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleMobOpen}>Connect</Button>

                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/www.png" alt="logo" />
                    </ListItemAvatar>
                    <ListItemText primary="Web App" secondary="Connect the web Appllication" />
                    <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleMAOpen}>Connect</Button>
                </ListItem>
            </List>

            {/* Role */}
            <br />

            <List
                sx={{
                    width: '100%',
                    maxWidth: "80%",
                    bgcolor: 'background.paper',
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginTop: "2%"
                }}
            >
                <ListItem>
                    <ListItemText primary="Invite Team Members" secondary="" />
                    <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleTeamOpen}>Invite</Button>

                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <div>
                        <ul>
                            <li>• <strong>Admin</strong> are Superusers, they can do everything.</li>
                            <li>• <strong>Security Manager</strong> can manage accounts, team members, integrations and issues.</li>
                            <li>• <strong>Security Engineers</strong> can only view and collaborate on issues.</li>
                        </ul>
                    </div>

                </ListItem>
                <Divider component="li" />


                {teams.map((row) => (

                    <ListItem key={row.id} divider={true}>
                        <ListItemAvatar>

                            <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/avt.png" alt="logo" />


                        </ListItemAvatar>
                        <ListItemText primary={row.email} secondary={row.role} />
                        <IconButton>
                            <Icon>clear</Icon>
                        </IconButton>
                        {/* <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} ></Button> */}

                    </ListItem>


                ))}


            </List>






            <br />


            {/* Interegation */}
            <Integrate />


            {/* MobApp */}

            <>
                <Dialog open={open} onClose={handleMobClose} fullWidth={true} maxWidth={"xs"} sx={{ BorderRadius: "0px" }} square="true" >
                    <DialogContent >
                        <div className="flex shrink items-center sm:w-224">
                            <div className="flex items-center">
                                {/* <Icon
                  component={motion.span}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.2 } }}
                  className="text-24 md:text-32"
                > */}
                                <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/mobile.png" alt="logo" />
                                {/* </Icon> */}
                                <Typography
                                    component={motion.span}
                                    initial={{ x: -20 }}
                                    animate={{ x: 0, transition: { delay: 0.2 } }}
                                    delay={300}
                                    className="hidden sm:flex text-24 md:text-24 mx-12 font-semibold"
                                >
                                    Mobile Application
                                </Typography>
                            </div>
                        </div>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%', borderRadius: "0px"
                            }}
                        >
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                                Title
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    defaultValue=""
                                />
                            </FormControl>


                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "0%" }}>
                                Platform
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    value={Status}
                                    onChange={handleChangeStatus}
                                    onClick={handleClick}
                                />
                                <Popover
                                    id={id}
                                    open={openp}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={handleChangeStatus} >IOS</MenuItem>
                                    <MenuItem onClick={handleChangeStatus} >Android</MenuItem>

                                </Popover>
                            </FormControl>

                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                                Package name
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    width="330"
                                    defaultValue=""

                                /></FormControl>


                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", paddingLeft: "1%", marginBottom: "2%", background: "#62575780", color: "#FFFFFF", fontSize: "12px" }}>
                                The mobile application will be reviewed by Securitybulls team.It may take up to 1-2 buisness days in process

                            </FormControl>

                        </Box>
                        <FormControl sx={{ minWidth: "10%", alignItems: "Center", marginLeft: "5%", marginBottom: "2%" }}>
                            <Button variant="contained" sx={{ borderRadius: "2px", maxWidth: "24", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleMobClose}>Submit</Button>
                        </FormControl>
                    </DialogContent>
                </Dialog>
            </>





            {/* WebApp */}
            <>
                <Dialog open={openMA} onClose={handleMAClose} fullWidth={true} maxWidth={"xs"} sx={{ BorderRadius: "0px" }} square="true" >
                    <DialogContent >
                        <div className="flex shrink items-center sm:w-224">
                            <div className="flex items-center">
                                {/* <Icon
                  component={motion.span}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.2 } }}
                  className="text-24 md:text-32"
                > */}
                                <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/www.png" alt="logo" />
                                {/* </Icon> */}
                                <Typography
                                    component={motion.span}
                                    initial={{ x: -20 }}
                                    animate={{ x: 0, transition: { delay: 0.2 } }}
                                    delay={300}
                                    className="hidden sm:flex text-24 md:text-24 mx-12 font-semibold"
                                >
                                    Web Application
                                </Typography>
                            </div>
                        </div>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%', borderRadius: "0px"
                            }}
                        >
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                                Name
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    defaultValue=""
                                />
                            </FormControl>
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                                Host
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    defaultValue=""
                                />
                            </FormControl>
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                                Domain Address
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    defaultValue=""
                                />
                            </FormControl>
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                                IP
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    defaultValue=""
                                />
                            </FormControl>
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", paddingLeft: "1%", marginBottom: "2%", background: "#62575780", color: "#FFFFFF", fontSize: "12px" }}>
                                The mobile application will be reviewed by Securitybulls team.It may take up to 1-2 buisness days in process

                            </FormControl>
                        </Box>
                        <FormControl sx={{ minWidth: "10%", alignItems: "Center", marginLeft: "5%", marginBottom: "2" }}>
                            <Button variant="contained" sx={{ borderRadius: "2px", maxWidth: "24", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleMAClose}>ADD</Button>
                        </FormControl>
                    </DialogContent>
                </Dialog>
            </>








            {/* Team */}
            <>
                <Dialog open={team} onClose={handleTeamCLose} fullWidth={true} maxWidth={"xs"} sx={{ BorderRadius: "0px" }} square="true" >
                    <DialogContent >
                        <div className="flex shrink items-center sm:w-224">
                            <div className="flex items-center">
                                {/* <Icon
                  component={motion.span}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.2 } }}
                  className="text-24 md:text-32"
                > */}
                                <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/avt.png" alt="logo" />
                                {/* </Icon> */}
                                <Typography
                                    component={motion.span}
                                    initial={{ x: -20 }}
                                    animate={{ x: 0, transition: { delay: 0.2 } }}
                                    delay={300}
                                    className="hidden sm:flex text-24 md:text-24 mx-12 font-semibold"
                                >
                                    Team Members
                                </Typography>
                            </div>
                        </div>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%', borderRadius: "0px"
                            }}
                        >
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                                Name
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    defaultValue=""
                                />
                            </FormControl>
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                                Email
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    defaultValue=""
                                />
                            </FormControl>
                            <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "3%" }}>
                                Role
                                <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    value={Status2}
                                    onClick={handleClick2}
                                />
                                <Popover
                                    id={id2}
                                    open={openr}
                                    anchorEl={anchorEl2}
                                    onClose={handleClose2}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={handleChangeStatus2} >Admin</MenuItem>
                                    <MenuItem onClick={handleChangeStatus2} >Security manager</MenuItem>
                                    <MenuItem onClick={handleChangeStatus2} >Security engineer</MenuItem>
                                </Popover>
                            </FormControl>
                        </Box>
                        <FormControl sx={{ minWidth: "10%", alignItems: "Center", marginLeft: "5%", marginBottom: "2" }}>
                            <Button variant="contained" sx={{ borderRadius: "2px", maxWidth: "24", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleTeamCLose}>Submit</Button>
                        </FormControl>
                    </DialogContent>
                </Dialog>
            </>





        </div>

    </>
    );

};





export default Setting;