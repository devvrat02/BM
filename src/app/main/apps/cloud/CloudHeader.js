import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

function CloudHeader() {


  return (
    // <div className="flex flex-1 items-center justify-between p-4 sm:p-24">
    <div className="flex shrink items-center sm:w-224">
      <div className="flex items-center">
        <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          cloud
        </Icon>
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
        >
          Cloud
        </Typography>
      </div>
    </div>
    // </div>
  );
}

export default CloudHeader;
