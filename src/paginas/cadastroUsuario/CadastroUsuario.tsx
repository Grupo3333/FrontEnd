import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function CadastroUsuario() {

    let history = useHistory();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>( //pega informação que o usuario digita
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            perfil: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>( //pega resposta da requisição feita pro back-end
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            perfil: '',
            foto: ''
        })

    useEffect(() => { //se o id != 0, foi cadastrado com sucesso, logo pode ir logar oq cadastrou
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value) //pega oq foi digitado em confirmarsenha e atualiza com a senha de cima
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) { //espera o usuario clicar no campo de texto para disparar evento

        setUser({ //
            ...user, //espalha as informações digitadas no objeto user
            [e.target.name]: e.target.value //target.name encontra o campo e atribui o valor de target.value
        })

    }
    async function cadastrar(e: ChangeEvent<HTMLFormElement>) { //Form pois o evento vem de um formulario
        e.preventDefault()

        // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success("Usuário cadastrado com sucesso", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

                //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)

                //Pode modificar a msg de acordo com o erro 
                toast.error("Erro ao realizar o cadastro. Tente novamente", {
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

        } else {
            toast.error("Dados inconsistentes", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6}>
                <Box paddingX={10}>
                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textosCAD'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' variant='outlined' name='nome' margin='normal' fullWidth placeholder='Digite seu nome completo' required />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' variant='outlined' name='usuario' margin='normal' type='email' fullWidth placeholder="Seu email funcionará como um usuário válido. Ex: exemplo@exemplo.com" required />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth placeholder="Senha de no mínimo 8 caracteres" required />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' placeholder="Digite novamente a sua senha" fullWidth required />
                        {/* <TextField value={user.perfil} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='perfil' variant='outlined' name='perfil' margin='normal' placeholder="Perfil de usuário (aluno ou professor)" fullWidth required /> */}
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' variant='outlined' name='foto' margin='normal' fullWidth placeholder="Foto de perfil (URL)" />
                        
                        <FormLabel component="legend">Perfil</FormLabel>
                        <RadioGroup aria-label="Perfil" name="perfil" value={user.perfil} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}>
                            <FormControlLabel value="Professor" control={<Radio />} label="Professor" />
                            <FormControlLabel value="Aluno" control={<Radio />} label="Aluno" />
                        </RadioGroup>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='outlined' color='primary' className='btnCadastrar'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;