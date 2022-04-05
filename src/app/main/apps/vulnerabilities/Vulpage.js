import FusePageSimple from '@fuse/core/FusePageSimple';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Breadcrumb from './Breadcrumb';







const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        minHeight: 96,
        height: 96,
        [theme.breakpoints.up('sm')]: {
            minHeight: 160,
            height: 160,
        },
    },
    '& .FusePageSimple-sidebarHeader': {
        minHeight: 96,
        height: 96,
        [theme.breakpoints.up('sm')]: {
            minHeight: 160,
            height: 160,
        },
    },
    '& .FusePageSimple-rightSidebar': {
        width: 320,
    },
}));

function Vulpage() {
    const pageLayout = useRef(null);
    return (<Root
        header={
            <div className="flex flex-col flex-1 p-8 sm:p-12 relative">
                <div className="flex items-center justify-between">
                    <IconButton
                        onClick={(ev) => {
                            pageLayout.current.toggleLeftSidebar();
                        }}
                        aria-label="open left sidebar"
                        size="large"
                    >
                        <Icon>menu</Icon>
                    </IconButton>

                </div>
                <div className="flex flex-1 items-end">

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.6 } }}
                    >
                        {selectedItem && (
                            <Breadcrumb
                                selected={selectedItem}
                                className="flex flex-1 ltr:pl-72 rtl:pr-72 pb-12 text-16 sm:text-24 font-semibold"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        }
        // content={<FileList pageLayout={pageLayout} />}
        // leftSidebarVariant="temporary"
        // leftSidebarHeader={<MainSidebarHeader />}
        // leftSidebarContent={<MainSidebarContent />}
        // rightSidebarHeader={<DetailSidebarHeader />}
        // rightSidebarContent={<DetailSidebarContent />}
        content={ }
        leftSidebarVariant="temporary"
        leftSidebarHeader={ }
        leftSidebarContent={ }
        rightSidebarHeader={ }
        rightSidebarContent={ }
        ref={pageLayout}
        innerScroll
    />);



}
export default Vulpage;