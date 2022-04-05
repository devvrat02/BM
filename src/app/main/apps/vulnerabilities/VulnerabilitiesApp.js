import * as React from 'react';
import VulnerabilitiesTable from "./VulnerabilitiesTable";
import FusePageSimple from '@fuse/core/FusePageSimple';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// import Breadcrumb from './Breadcrumb';


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 50,
    height: 50,
    [theme.breakpoints.up('sm')]: {
      minHeight: 50,
      height: 50,
    },
  },

}));



function VulnerabilitiesApp() {
  const [bug, setBug] = React.useState('');
  const handlebug = (value) => {
    setBug(value);
  };
  const handlebugclose = (value) => {
    setBug('');
  };
  const pageLayout = useRef(null);
  return (<>
    <Root
      header={
        <div className="flex flex-col flex-1 p-8 sm:p-12 relative">
          <div className="flex items-center justify-left">
            <IconButton
              aria-label="open right sidebar"
              size="small">
              <Icon>chevron_right</Icon> <Typography variant='h-4' className="SemiBold">Vulnerabilities
              </Typography> </IconButton>
          </div>
          <div className="flex flex-1 items-end">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              {/* {selectedItem && (
                <Breadcrumb
                  selected={selectedItem}
                  className="flex flex-1 ltr:pl-72 rtl:pr-72 pb-12 text-16 sm:text-24 font-semibold"
                />
              )} */}
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
      content={(bug == '') ? <VulnerabilitiesTable /> : <></>}
      leftSidebarVariant="temporary"

      ref={pageLayout}
      innerScroll
    />
    {/* <VulnerabilitiesTable /> */}
  </>
  );
}

export default VulnerabilitiesApp;
