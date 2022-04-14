import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../services/Service';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken, addId } from '../../store/user/action';
import { toast } from 'react-toastify';
import Contato from '../contato/Contato';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Login() {

    let history = useHistory();

    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        perfil: "",
        foto: "",
        token: ""
    })
    // Crie mais um State para pegar os dados retornados a API
    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        token: '',
        foto: "",
        perfil: ""
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (respUserLogin.token !== "") {

            // Verifica os dados pelo console (Opcional)
            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)

            // Guarda as informações dentro do Redux (Store)
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
            history.push('/feed')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)

            toast.success('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes, erro ao logar.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit} className="form-itens">
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textoENTRAR'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' variant='outlined' name='usuario' margin='normal' placeholder="Usuário" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' variant='outlined' name='senha'
                            margin='normal' type='password'
                            className='textosCOR'
                            fullWidth
                            placeholder="Senha"

                        />
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary' className="botaoLOGIN">
                                Logar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos2' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastrousuario">
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1 '>
                                Cadastre-se
                            </Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} >
            <Box display="flex" flex-direction= "column" className='imagem'>

            </Box>
            </Grid>
            <Grid xs={12} className='postagens'>
                <TabPostagem />
            </Grid>
        </Grid>

    );
}

export default Login;