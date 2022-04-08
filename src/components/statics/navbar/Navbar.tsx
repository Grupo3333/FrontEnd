import React, { useEffect } from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { addToken } from '../../../store/user/action';
import { toast } from 'react-toastify';

function Navbar() {

    let history = useHistory()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();
    function goLogout() {
        dispatch(addToken(''))

        toast.info('Usuário deslogado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnFocusLoss: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        history.push('login')
    }
    var navbarComponent;
    if (token !== "") {
        navbarComponent = <AppBar position="static" className="MuiAppBar-colorPrimary " >
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

                    <Link to="/feed" className="text-decorator-none">
                        <Box mx={1} className='cursor navbar'>
                            <Typography variant="h6" color="inherit">
                                Feed
                            </Typography>
                        </Box>
                    </Link>


                </Box>

            </Toolbar>
        </AppBar>
    }


    return (
        <>
            {
                navbarComponent
            }
        </>
    );
}

export default Navbar;