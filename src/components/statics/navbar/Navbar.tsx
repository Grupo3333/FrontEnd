import React from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                <Box className='cursor'>
                    <img className="Logo" src="https://i.imgur.com/j5INNrT.png" alt="LogoTipo" width="35px" height="35px" />
                    </Box>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                       
                            SchoolBoard
                        </Typography>
                    </Box>
                   
                    <Box display="flex">

                        <Link to='/home' className='text-decorator-none'>
                            <Box display="flex" justifyContent="start">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        home
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>

                        <Link to='/contato' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    contato
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}


export default Navbar;