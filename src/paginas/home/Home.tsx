import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>
                        O objetivo da rede social é conectar professores voluntários que desejam auxiliar alunos da educação básica ou universidade em diversas áreas do conhecimento.

                            </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagem">
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

/*
    <h1 className="titulo">Teste</h1>
    <h2 className="subtitulo">Teste2</h2>
    <img className="imagem" src="https://i.imgur.com/Duy32P4.jpeg" alt="Tela Inicial" />

    <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Paper style={{ height: "100vh", background: "yellow"}}/>
                </Grid>
                <Grid item container spacing={2} direction="column" xs={12} sm={4}>
                    <Grid item>
                        <Paper style={{ height: "49vh", background: "red"}}/>

                    </Grid>
                    <Grid item>
                        <Paper style={{ height: "49vh", background: "black"}}/>

                    </Grid>

                </Grid>
            </Grid>


 <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                    <img className="imagem" src="https://i.imgur.com/Duy32P4.jpeg" alt="" style={{width: "100%", height: "100%"}}/>
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color="primary">
                            Brock
                        </Button>
                        <Button variant="contained" color="secondary">
                            Lee
                        </Button>
                    </Box>
                </Box>
            </Paper>
    */