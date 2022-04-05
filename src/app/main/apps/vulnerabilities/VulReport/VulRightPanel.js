import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import Divider from '@mui/material/Divider';

import Button from '@mui/material/Button'

import SevBttn from '../SevBttn';

import ListItemAvatar from '@mui/material/ListItemAvatar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function VulRightPanel(props) {
    // const selectedItem = true;

    // if (!selectedItem) {
    //     return null;
    // }

    return (
        <motion.div
            initial={{ y: 50, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
            className="file-details p-16 sm:p-24"
        >

            {/* <FormControlLabel
                className="offline-switch"
                control={<Switch checked="offline" aria-label="Available Offline" />}
                label="Available Offline"
            /> */}


            <table className="w-full text-justify">
                <tbody>
                    <tr className="type h-52">
                        <th className="text-12 font-medium">Status</th>
                        <td className="text-center"><SevBttn name="Fixed" /></td>
                    </tr>


                    <tr className="size h-52">
                        <th className="text-12 font-medium">Updates</th>
                        <td className=" text-12 text-center">15/02/2022</td>
                    </tr>

                    <tr className="size h-52">
                        <th className="text-12 font-medium">Discovered</th>
                        <td className="text-12 text-center">01/01/2022</td>
                    </tr>

                    <tr className="location h-52 text-left">
                        <th className="text-12 font-medium">Severity</th>
                        <td className="text-center"><SevBttn name="Critical" /></td>
                    </tr>

                    <tr className="owner h-52">
                        <th className="text-12 font-medium">Assigness</th>
                        <td className="text-center">Aman</td>
                    </tr>


                </tbody>
            </table>
            <br />
            <Divider />


            <List >
                <ListItem>
                    <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/jira.png" alt="logo" />
                    <ListItemText primary="Jira" />
                    <Button variant="contained" className="text-12" color='grey' sx={{ backgroundColor: "#625757100", borderRadius: "4px", marginTop: "1%", maxWidth: "15", maxHeight: "20px" }} >Connect</Button>
                </ListItem>

                <ListItem>
                    {/* <img className="logo-icon w-30 h-24" sx={{ marginRight: "20%", marginLeft: "2%", marginTop: "2%" }} src="assets/images/logos/jira.png" alt="logo" /> */}
                    <ListItemText primary="PagerDuty" />
                    <Button variant="contained" className="text-12" color='grey' sx={{ backgroundColor: "#625757100", borderRadius: "4px", marginTop: "1%", maxWidth: "15", maxHeight: "20px" }} >Create Incident</Button>
                </ListItem>
                <Divider component="li" />
            </List>
        </motion.div>
    );

}

export default VulRightPanel;