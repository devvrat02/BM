import * as React from 'react';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';


function VulsideHeader(props) {

    return (
        <div className="flex flex-col justify-between h-full p-4 sm:p-12">
            <div className=" toolbar flex align-center justify-between">
                {/* <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}> */}

                <Button variant="contained" className="text-12" color='grey' sx={{ backgroundColor: "#625757", borderRadius: "4px", marginTop: "1%", maxWidth: "15", maxHeight: "20px", color: "#FFFFFF" }} >Export</Button>
                <Button variant="contained" className="text-12" color='grey' sx={{ backgroundColor: "#625757", borderRadius: "4px", marginTop: "1%", maxWidth: "15", maxHeight: "20px", color: "#FFFFFF" }} >Resolve</Button>
                <Button variant="contained" className="text-12" color='grey' sx={{ backgroundColor: "#625757", borderRadius: "4px", marginTop: "1%", maxWidth: "15", maxHeight: "20px", color: "#FFFFFF" }} >Rescan</Button>


                {/* </motion.div> */}
            </div>

            <div className="p-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
                    <div className="toolbar flex align-center justify-between">
                        {/* <Button variant="contained" sx={{ borderRadius: "4px", maxWidth: "15", maxHeight: "20px", color: "#FFFFFF" }} >Export</Button> */}
                    </div>
                </motion.div>

            </div>

        </div>
    );

}

export default VulsideHeader;