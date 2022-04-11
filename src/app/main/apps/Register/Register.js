import Card from '@mui/material/Card';
import { styled, darken } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FirebaseRegisterTab from './FirebaseRegisterTab';
import * as React from 'react';
import FirebasePentRegister from './FirebasePentRegister';
const Root = styled('div')(({ theme }) => ({


    '& .Register-leftSection': {},

    '& .Register-rightSection': {
        background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
            theme.palette.primary.dark,
            0.5
        )} 100%)`,
        color: theme.palette.primary.contrastText,
    },
}));

function Register() {
    const [person, setPerson] = React.useState("PENTESTER");
    const handleperson = (e) => {
        (person === "CLIENT") ? setPerson("PENTESTER") : setPerson("CLIENT");
    }


    return (
        <Root className="flex flex-col flex-auto items-center justify-center shrink-0 p-16 md:p-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex w-full max-w-400 md:max-w-3xl  shadow-2xl overflow-hidden"
            >

                <div className="Register-rightSection  md:flex flex-1 items-center justify-center p-64">

                    <Card
                        className="Register-leftSection flex flex-col w-full max-w-sm items-center justify-center shadow-0"
                        square
                    >
                        <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                            >
                                <div className="flex items-center justif-center mb-32">
                                    <img className="logo-icon w-48 pr-5" src="favicon.ico" alt="logo" />
                                    <div className="border-l-1 mr-4 w-1 h-40" />
                                    <div>
                                        <Typography className="text-24 font-semibold logo-text" color="inherit">
                                            ESAF
                                        </Typography>

                                        <Typography
                                            className="text-16 tracking-widest -mt-8 font-700"
                                            color="textSecondary"
                                            onClick={handleperson}
                                        >
                                            {person}
                                        </Typography>

                                    </div>
                                </div>
                            </motion.div>



                            <FirebasePentRegister />

                        </CardContent>


                    </Card>
                </div>
            </motion.div>
        </Root>
    );
}

export default Register;
