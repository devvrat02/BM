import * as React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import VulsideHeader from './VulsideHeader';
import VulRightPanel from './VulRightPanel';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Report from './Report';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        minHeight: 50,
        height: 14,
        [theme.breakpoints.up('sm')]: {
            minHeight: 50,
            height: 14,
        },
    },
    '& .FusePageSimple-sidebarHeader': {
        minHeight: 50,
        height: 14,

        [theme.breakpoints.up('sm')]: {
            minHeight: 50,
            height: 14,

        },
    },
    '& .FusePageSimple-rightSidebar': {
        width: 300,
    },
}));

function VulReport(props) {
    const pageLayout = useRef(null);
    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/apps/vulnerabilities`;
        navigate(path);
    }



    const { state } = useLocation();
    const db = state;
    return (<>
        <Root
            header={

                <div className="flex flex-col flex-1 p-8 sm:p-12 relative">
                    <div className="flex items-center justify-between" >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.6 } }}
                        >  <Stack direction="row" spacing={2}>
                                <Icon onClick={routeChange}>chevron_left</Icon>  <Breadcrumbs aria-label="breadcrumb">
                                    <Link
                                        underline="hover"
                                        color="text.secondary"
                                        href="/apps/vulnerabilities"
                                    >
                                        <Typography color="text.primary">   Vulnerabilities</Typography>
                                    </Link>
                                    <Typography color="text.primary">{state.Vulnerability}</Typography>
                                </Breadcrumbs>
                            </Stack>
                        </motion.div>
                        <Hidden lgUp>
                            <IconButton size="small"
                                onClick={() => pageLayout.current.toggleRightSidebar()}
                                aria-label="open right sidebar"
                                size="small"
                            >
                                <Icon>miscellaneous_services</Icon>
                            </IconButton>
                        </Hidden>
                    </div>

                </div>


            }
            // rightSidebarHeader={<VulsideHeader />}
            // leftSidebarVariant="temporary"
            // leftSidebarHeader={<MainSidebarHeader />}
            // leftSidebarContent={<MainSidebarContent />}
            // rightSidebarHeader={<DetailSidebarHeader />}
            // rightSidebarContent={<DetailSidebarContent />}
            content={
                <>  <Paper className="w-full no-border overflow-hidden p-12 " sx={{ backgroundColor: "transparent" }} variant="outlined" square>

                    <Report Data={db} />
                </Paper>
                </>}
            // leftSidebarVariant="temporary"
            rightSidebarHeader={< VulsideHeader data={db} />}
            rightSidebarContent={< VulRightPanel data={db} />}
            ref={pageLayout}
            innerScroll
        />
    </>
    );



}
export default VulReport;