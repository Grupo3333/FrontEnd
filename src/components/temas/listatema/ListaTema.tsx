import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';


function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();

  useEffect(() => {
    if (token == '') {
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

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      {
        temas.map(tema => (
          <Grid container direction="row" >
            <Grid item xs={12} className='listaTema'>
              <Box className="caixa">
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Tema
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {tema.tema}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {tema.nivel}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5} >

                      <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" className="marginLeft botaoListTemaAtual" size='small' color="primary" >
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none ">
                        <Box mx={1}>
                          <Button variant="contained" size='small' color="secondary" className="botaoListTemaDelet">
                            deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
        ))
      }
    </>
  );
}


export default ListaTema;