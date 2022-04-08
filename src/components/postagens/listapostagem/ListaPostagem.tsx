import React, { ChangeEvent, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca, buscaId, put } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';
import FavoriteIcon from '@material-ui/icons/Favorite';



function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    descricao: "",
    imagem: "",
    curtidas: 0,
    tema: null,
    usuario: null
  })
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

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

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }
  async function curtidas(id: number) {
    await put(`/postagens/curtir/${id}`, postagem, setPostagem, {
      headers: {
        'Authorization': token
      }
    }
    );
    getPost()
  }
 
  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="body2" component="p">
                {post.usuario?.nome}
              </Typography>
              <Typography variant="body2" component="p">
                {post.usuario?.perfil}
              </Typography>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.descricao}
                </Typography>
                <img src={post.imagem} alt="" width="100px" height="100px" />
                <Typography variant="body2" component="p">
                  {post.tema?.tema}
                </Typography>
                <IconButton aria-label="add to favorites" onClick = {() => { curtidas(post.id) }} >
                  <FavoriteIcon />
                  <Typography variant="body2" component="p">
                    {post.curtidas}
                  </Typography>
                </IconButton>

              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;