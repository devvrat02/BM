import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';
import SevBttn from "./SevBttn";


function VulBox(props) {
    const data = props.Data;
    return (<>
        <div className="w-full flex flex-col justify-between" >
            <div className="flex flex-col sm:flex sm:flex-row pb-4">
                <motion.div className="widget flex w-full sm:w-1/3 p-4">
                    <Paper className="w-full flex flex-col justify-between" variant="outlined" square>
                        <div className="text-center py-4">
                            <Typography className="text-14 px-16 font-semibold" color="textSecondary">
                                Finding ID
                            </Typography>
                            <Typography className="text-12 font-normal text-grey">
                                {data.id}
                            </Typography>
                        </div>
                    </Paper>
                </motion.div>
                <motion.div className="widget flex w-full sm:w-1/3 p-4">
                    <Paper className="w-full flex flex-col justify-between" variant="outlined" square>
                        <div className="text-center py-4">
                            <Typography className="text-14 px-16 font-semibold" color="textSecondary">
                                Product
                            </Typography>
                            <Typography className="text-12 font-normal text-grey">
                                {data.Target}
                            </Typography>
                        </div>
                    </Paper>
                </motion.div>
                <motion.div className="widget flex w-full sm:w-1/3 p-4">
                    <Paper className="w-full flex flex-col justify-between" variant="outlined" square>
                        <div className="text-center py-4">
                            <Typography className="text-14 px-16 font-semibold" color="textSecondary">
                                Report
                            </Typography>
                            <Typography className="text-12 font-normal text-grey">
                                {data.report}
                            </Typography>
                        </div>
                    </Paper>
                </motion.div>
            </div>
            <div className="flex flex-col sm:flex sm:flex-row pb-4">
                <motion.div className="widget flex w-full sm:w-1/2 p-4">
                    <Paper className="w-full flex flex-col justify-between" variant="outlined" square>
                        <div className="text-center py-4">
                            <Typography className="text-14 px-16 font-semibold" color="textSecondary">
                                CWE
                            </Typography>
                            <Typography className="text-12 font-normal text-grey">
                                {data.CWEvalue}
                            </Typography>
                        </div>
                    </Paper>
                </motion.div>
                <motion.div className="widget flex w-full sm:w-1/2 p-4">
                    <Paper className="w-full flex flex-col justify-between" variant="outlined" square>
                        <div className="text-center py-4">
                            <Typography className="text-14 px-16 font-semibold" color="textSecondary">
                                CVSS Scrore
                            </Typography>
                            <Typography className="text-12 font-normal text-grey">
                                {data.CVSSvalue}
                            </Typography>
                        </div>
                    </Paper>
                </motion.div>

            </div>
            <div className="flex flex-col sm:flex sm:flex-row pb-4">
                <motion.div className="widget flex w-full sm:w-1/2 p-4">
                    <Paper className="w-full flex flex-col justify-between" variant="outlined" square>
                        <div className="text-center py-4">
                            <Typography className="text-14 px-16 font-semibold " sx={{ marginBottom: "0.8%" }} color="textSecondary">
                                Status
                            </Typography>

                            <SevBttn name={data.Statusvalue} />

                        </div>
                    </Paper>
                </motion.div>
                <motion.div className="widget flex w-full sm:w-1/2 p-4">
                    <Paper className="w-full flex flex-col justify-between" variant="outlined" square>
                        <div className="text-center py-4">
                            <Typography className="text-14 px-16 font-semibold" sx={{ marginBottom: "0.8%" }} color="textSecondary">
                                Severity
                            </Typography>

                            <SevBttn name={data.Severity} />

                        </div>
                    </Paper>
                </motion.div>

            </div>
        </div>
    </>
    );
}

export default VulBox;
