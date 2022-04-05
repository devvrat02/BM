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

import { motion } from 'framer-motion';
import Input from '@mui/material/Input'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';


function App() {
    const [open, setOpen] = React.useState(false);
    const [openMA, setOpenMA] = React.useState(false);

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


    return (<>


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
                                defaultValue=""

                            /></FormControl>

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
                    </Box>
                    <FormControl sx={{ minWidth: "10%", alignItems: "Center", marginLeft: "5%", marginBottom: "2" }}>
                        <Button variant="contained" sx={{ borderRadius: "2px", maxWidth: "24", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleMAClose}>ADD</Button>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </>




    </>);
};



export default App();