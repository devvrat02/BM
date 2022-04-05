import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
// import { useDispatch, useSelector } from 'react-redux';
// import { openNewContactDialog } from './store/contactsSlice';

function CloudSidebar() {
//   const dispatch = useDispatch();

  return (
    <div className="p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4">
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className="rounded-0 shadow-none lg:rounded-16 lg:shadow"
      >
        <div className="p-24 flex items-center">
          <Typography className="mx-12">Connect To</Typography>
        </div>

        <Divider />

        <div className="p-24">
          <Button
            variant="contained"
            color="secondary"
            className="w-full"
            // onClick={(ev) => dispatch(openNewContactDialog())}
          >
            New Contact
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default CloudSidebar;
