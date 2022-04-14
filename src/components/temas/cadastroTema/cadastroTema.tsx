import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { Link, useHistory, useParams } from 'react-router-dom'
import './cadastroTema.css';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';




function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        tema: "",
        nivel: ""
    })

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
            }); history.push("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
            postagem: [{}]
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Se o ID for diferente de indefinido tente Atualizar
        if (id !== undefined) {

            // TRY: Tenta executar a atualização 
            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Tema atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

                // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Dados inconsistentes.', {
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

            // Se o ID for indefinido, tente Cadastrar
        } else {

            // TRY: Tenta executar o cadastro
            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Tema cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Dados inconsistentes.', {
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

        back()
    }


    function back() {
        history.push('/temas')
    }
    
    return (
        <Container maxWidth="sm" className="marginCadTema ">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className='cadTemaTitulo' >Formulário de cadastro tema</Typography>
                <TextField value={tema.tema} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tema" label="Tema" variant="outlined" name="tema" margin="normal" fullWidth />
                {/* <TextField value={tema.nivel} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="nivel" label="Nível" variant="outlined" name="nivel" margin="normal" fullWidth /> */}
                <FormLabel component="legend" className='radioGroupTema'>Nível</FormLabel>
                <RadioGroup aria-label="Nível" name="nivel" value={tema.nivel} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} className="radioGroupTema">
                    <FormControlLabel value="Básico" control={<Radio />} label="Básico" />
                    <FormControlLabel value="Intermediário" control={<Radio />} label="Intermediário" />
                    <FormControlLabel value="Avançado" control={<Radio />} label="Avançado" />
                </RadioGroup>
                <Button type="submit" variant="outlined" color="inherit" className='margin botaoCadTemaFinalizar'>
                    Finalizar
                </Button>
                <Link to='/feed'>
                    <Button type="submit" variant="contained" color="primary" className="botaoCadTemaCancelar">
                        Cancelar
                    </Button>
                </Link>
            </form>
        </Container>
    )
}

export default CadastroTema;