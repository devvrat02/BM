import * as React from 'react';

import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';

function Integrate() {
    return (<>





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
                <ListItemText primary="Interegation" secondary="Integrate with the Application" />
            </ListItem>
            <Divider component="li" />


            <ListItem>
                <ListItemAvatar>
                    <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/jira.png" alt="logo" />
                </ListItemAvatar>
                <ListItemText primary="Jira" secondary="Connect with Azure" />
                <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} >Intregate</Button>
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemAvatar>
                    <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/confluence.png" alt="logo" />
                </ListItemAvatar>
                <ListItemText primary="Confluence" secondary="Connect with Azure" />
                <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} >Intregate</Button>
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemAvatar>
                    <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/bmc.png" alt="logo" />
                </ListItemAvatar>
                <ListItemText primary="BMC Remedy" secondary="Connect with Azure" />
                <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} >Intregate</Button>
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemAvatar>
                    <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/slack.png" alt="logo" />
                </ListItemAvatar>
                <ListItemText primary="Slack" secondary="Connect with Azure" />
                <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "20", maxHeight: "24px", color: "#FFFFFF" }} >Intregate</Button>
            </ListItem>
        </List>


    </>);
}

export default Integrate;