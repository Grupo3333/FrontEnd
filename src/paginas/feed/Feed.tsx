import React, { useEffect } from 'react';
import { Grid, Paper, Box, Button, Typography } from '@material-ui/core';
import './Feed.css';
import ModalPostagem from '../../components/postagens/modalPostagem/modalPostagem';
import { useHistory, Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/user/userReducer';
import { toast } from 'react-toastify';
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';
import User from '../../models/User'
import { useState } from 'react';
import { buscaId } from '../../services/Service';

function Feed() {

    let history = useHistory();
    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        perfil: ''
    })

    //state de usuario inicializando os campos, puxar o id pelo reducer, dps fazer um findbyid pra pegar info do usuario, findbyid alimenta o state, isso vai me dar acesso.

    useEffect(() => {
        if (token == "") {
            toast.info("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <>

            <Grid container direction="row" className='caixa'>

                <Grid xs={1} />

                <Grid item xs={2} className='perfil'>
                    <Box display="flex" justifyContent="center">
                        <Box >
                            
                            <img src={user.foto} alt="foto" className='foto' width="150px" height="150px" />
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h5" component="p">
                            {user.nome}
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Typography variant="h6" component="p">
                            {user.perfil}
                        </Typography>
                    </Box>


                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Link to="/posts" className="text-decorator-none">
                            <Button className='botao2'>Minhas Postagens<br /></Button>
                        </Link>
                    </Box>
                    
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        
                            <ModalPostagem />
                        
                    </Box>
                    <Grid xs={1} />


                </Grid>



                <Grid xs={1} />

                <Grid xs={6} className='postagens'>
                    <ListaPostagem />
                </Grid>

                <Grid xs={1} />




            </Grid>
        </>
    );
}

export default Feed;