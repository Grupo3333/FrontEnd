import React, { useEffect } from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {

    let history = useHistory()

    const [token, setToken] = useLocalStorage('token')

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history.push("/login")
    }

    return (
        <>
            <AppBar position="static" className="MuiAppBar-colorPrimary " >
                <Toolbar variant="dense" className='tamanho MuiAppBar-colorPrimary teste' >


                    <Box display="flex"  >

                        <Link to="/home" className="text-decorator-none">
                            <Box className='cursor'>
                                <img className="Logo" src="https://i.imgur.com/j5INNrT.png" alt="LogoTipo" width="35px" height="35px" />
                            </Box>

                        </Link>
                        <Link to="/home" className="text-decorator-none">
                            <Box className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    SchoolBoard
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor navbar'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor navbar'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor navbar'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>


                        <Box mx={1} className='cursor navbar' onClick={goLogout}>
                            <Typography variant="h6" color="inherit" >
                                Logout
                            </Typography>
                        </Box>


                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;