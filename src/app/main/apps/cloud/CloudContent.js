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

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';

function CloudContent() {

  const [open, setOpen] = React.useState(false);
  const [openMA, setOpenMA] = React.useState(false);
  const [openGC, setOpenGC] = React.useState(false);


  const handleAWSOpen = () => {
    setOpen(true);
  };

  const handleAWSClose = () => {
    setOpen(false);
  };


  const handleMAOpen = () => {
    setOpenMA(true);
  };

  const handleMAClose = () => {
    setOpenMA(false);
  };



  const handleGCOpen = () => {
    setOpenGC(true);
  };

  const handleGCClose = () => {
    setOpenGC(false);
  };







  return (<>
    <div >
      {/*  */}


      <List
        sx={{
          width: '100%',
          maxWidth: "80%",
          bgcolor: 'background.paper',
          marginLeft: "10%",
          marginRight: "10%"
        }}
      >
        <ListItem>
          <ListItemText primary="Connect With" secondary="Select the account you want to connent with up on that we can work with." />
        </ListItem>
        <Divider component="li" />
        {/* <li>
              <Typography
                sx={{ mt: 0.5, ml: 2 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Divider
              </Typography>
            </li> */}
        <ListItem>
          <ListItemAvatar>

            <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/awslogo.png" alt="logo" />

          </ListItemAvatar>
          <ListItemText primary="Amazon Web Services" secondary="Connect with AWS" />
          <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleAWSOpen}>Connect</Button>

        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemAvatar>
            <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/azure.png" alt="logo" />
          </ListItemAvatar>
          <ListItemText primary="Azure" secondary="Connect with Azure" />
          <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleMAOpen}>Connect</Button>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemAvatar>
            <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/gcplain.png" alt="logo" />
            {/* <Avatar>
                  <BeachAccessIcon />
                </Avatar> */}
          </ListItemAvatar>
          <ListItemText primary="Google Cloud" secondary="Connect with Google Cloud" />
          <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleGCOpen}>Connect</Button>
        </ListItem>

      </List>



      {/* AWS */}

      <>
        <Dialog open={open} onClose={handleAWSClose} fullWidth={true} maxWidth={"xs"} sx={{ BorderRadius: "0px" }} square="true" >
          <DialogContent >
            <div className="flex shrink items-center sm:w-224">
              <div className="flex items-center">
                {/* <Icon
                  component={motion.span}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.2 } }}
                  className="text-24 md:text-32"
                > */}
                <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/awslogo.png" alt="logo" />
                {/* </Icon> */}
                <Typography
                  component={motion.span}
                  initial={{ x: -20 }}
                  animate={{ x: 0, transition: { delay: 0.2 } }}
                  delay={300}
                  className="hidden sm:flex text-24 md:text-24 mx-12 font-semibold"
                >
                  Amazon AWS
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
                Account name
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "0%" }}>
                CloudFormation Template
              </FormControl>
              <FormControl sx={{ minWidth: "10%", marginLeft: "6%", marginRight: "5%" }}>
                <Button variant="contained"
                  sx={{ borderRadius: "4px", minWidth: "10", maxWidth: "10", maxHeight: "20px", color: "#FFFFFF" }}
                >Launch Stack</Button></FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "0%", marginBottom: "2%", fontSize: "10px" }}>
                <Typography variant="caption" >Launch the CloudFormation Template to create a new role</Typography>
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "0%" }}>
                Role Arn
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""

                /></FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "1px", marginBottom: "1%", fontSize: "10px" }}>
                <Typography variant="caption" >Copy Role ARN from the Stack Outputs when template finishes</Typography>
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "0%" }}>
                Externa ID
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  width="330"
                  defaultValue=""

                /></FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "1px", marginBottom: "1%", fontSize: "10px" }}>
                <Typography variant="caption" >This is auto generated by PingSafe. Please don't change it.</Typography>

              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
                Compliance(optional)
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", paddingLeft: "1%", background: "#62575780", color: "#FFFFFF", fontSize: "12px" }}>
                Along with advanced misconfigurations, you can optionally monitor your account against real-time gaps for compliances below

              </FormControl>
              <FormControl sx={{ m: 3, marginTop: ".1px", marginLeft: "5%" }} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox name="CIS 1.4 Level 1" />
                    }
                    label="CIS 1.4 Level 1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="PCI DSS 3.2.1" />
                    } label="PCI DSS 3.2.1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="RBI UCB" />
                    } label="RBI UCB"
                  />
                </FormGroup>

              </FormControl>
              <FormControl

                component="fieldset"
                sx={{ m: 3, marginTop: ".1px" }}
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox name="CIS 1.4 Level 2" />
                    } label="CIS 1.4 Level "
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="HIPAA" />
                    } label="HIPPA"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="RBI MD-ITF" />
                    } label="RBI MD-ITF"
                  />
                </FormGroup>
              </FormControl>
            </Box>
            <FormControl sx={{ minWidth: "10%", alignItems: "Center", marginLeft: "5%", marginBottom: "2" }}>
              <Button variant="contained" sx={{ borderRadius: "2px", maxWidth: "24", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleAWSClose}>Submit</Button>
            </FormControl>
          </DialogContent>
        </Dialog>
      </>





      {/* AZURE */}
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
                <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/azure.png" alt="logo" />
                {/* </Icon> */}
                <Typography
                  component={motion.span}
                  initial={{ x: -20 }}
                  animate={{ x: 0, transition: { delay: 0.2 } }}
                  delay={300}
                  className="hidden sm:flex text-24 md:text-24 mx-12 font-semibold"
                >
                  Microsoft Azure
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
                Account name
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                Application ID
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                Client Secret
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                Directory ID
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                Subscription ID
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>


              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
                Compliance(optional)
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", paddingLeft: "1%", background: "#62575780", color: "#FFFFFF", fontSize: "12px" }}>
                Along with advanced misconfigurations, you can optionally monitor your account against real-time gaps for compliances below

              </FormControl>
              <FormControl sx={{ m: 2, marginTop: ".1px", marginLeft: "5%" }} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox name="CIS 1.4 Level 1" />
                    }
                    label="CIS 1.4 Level 1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="PCI DSS 3.2.1" />
                    } label="PCI DSS 3.2.1"
                  />

                </FormGroup>
              </FormControl>
              <FormControl

                component="fieldset"
                sx={{ m: 2, marginTop: ".1px" }}
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox name="CIS 1.4 Level 2" />
                    } label="CIS 1.4 Level "
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="HIPAA" />
                    } label="HIPPA"
                  />

                </FormGroup>
              </FormControl>
            </Box>
            <FormControl sx={{ minWidth: "10%", alignItems: "Center", marginLeft: "5%", marginBottom: "2" }}>
              <Button variant="contained" sx={{ borderRadius: "2px", maxWidth: "24", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleMAClose}>Submit</Button>
            </FormControl>
          </DialogContent>
        </Dialog>
      </>







      {/* Google */}

      <>
        <Dialog open={openGC} onClose={handleGCClose} fullWidth={true} maxWidth={"xs"} sx={{ BorderRadius: "0px" }} square="true" >
          <DialogContent >
            <div className="flex shrink items-center sm:w-224">
              <div className="flex items-center">
                {/* <Icon
                  component={motion.span}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.2 } }}
                  className="text-24 md:text-32"
                > */}
                <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/gcplain.png" alt="logo" />
                {/* </Icon> */}
                <Typography
                  component={motion.span}
                  initial={{ x: -20 }}
                  animate={{ x: 0, transition: { delay: 0.2 } }}
                  delay={300}
                  className="hidden sm:flex text-24 md:text-24 mx-12 font-semibold"
                >
                  Google Cloud
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
                Account name
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                Project ID
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                Client ID
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%" }}>
                Private Key
                <TextField
                  required
                  multiline
                  size="small"
                  rows={4}
                  id="outlined-required"
                  defaultValue=""
                />
              </FormControl>



              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
                Compliance(optional)
              </FormControl>
              <FormControl sx={{ minWidth: "90%", marginLeft: "5%", marginRight: "5%", paddingLeft: "1%", background: "#62575780", color: "#FFFFFF", fontSize: "12px" }}>
                Along with advanced misconfigurations, you can optionally monitor your account against real-time gaps for compliances below

              </FormControl>
              <FormControl sx={{ m: 2, marginTop: ".1px", marginLeft: "5%" }} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox name="CIS 1.4 Level 1" />
                    }
                    label="CIS 1.4 Level 1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="PCI DSS 3.2.1" />
                    } label="PCI DSS 3.2.1"
                  />

                </FormGroup>
              </FormControl>
              <FormControl

                component="fieldset"
                sx={{ m: 2, marginTop: ".1px", marginLeft: "10%" }}
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox name="CIS 1.4 Level 2" />
                    } label="CIS 1.4 Level "
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="HIPAA" />
                    } label="HIPPA"
                  />

                </FormGroup>
              </FormControl>
            </Box>
            <FormControl sx={{ minWidth: "10%", alignItems: "Center", marginLeft: "5%", marginBottom: "2" }}>
              <Button variant="contained" sx={{ borderRadius: "2px", maxWidth: "24", maxHeight: "24px", color: "#FFFFFF" }} onClick={handleGCClose}>Submit</Button>
            </FormControl>
          </DialogContent>
        </Dialog>
      </>










    </div>

  </>
  );

};

export default CloudContent;