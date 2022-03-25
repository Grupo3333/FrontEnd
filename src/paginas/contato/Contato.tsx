import PropTypes from 'prop-types';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Contato.css';
import React, { Component } from 'react';

function Contato() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}> {/*12 quem somos nos*/}
                    <Box paddingX={20} >
                        <Typography variant="h1" gutterBottom color="textPrimary" component="h1" align="center" className='tituloC'>Sobre nós!</Typography>

                    </Box>
                </Grid>
                <Grid container item alignItems='center'> {/*oq é cultivar 6 + foto 6*/}
                    <Grid item xs={6} >
                        <img src="https://i.imgur.com/H88yIo2.png" alt="" width="600px" height="600px" />
                    </Grid>
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={20} >
                            <Typography
                                variant="h5"
                                gutterBottom color="textPrimary"
                                component="h5"
                                align="center"
                                className="tituloC">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officia odit! Veniam, id optio! In perferendis molestias ad omnis quibusdam, ipsum voluptatibus totam saepe earum minus incidunt id qui! Repellendus!
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid container item> {/*queremos atingir 6 + texto 6*/}
                        <Grid item xs={6} >
                            <Box paddingX={20} >
                                <Typography
                                    variant="h1"
                                    gutterBottom color="textPrimary"
                                    component="h1"
                                    align="center"
                                    className="tituloC">
                                    Quem queremos atingir
                                </Typography>

                            </Box>
                        </Grid>
                        <Grid alignItems="center" item xs={6}>
                            <Box paddingX={20} >
                                <Typography
                                    variant="h5"
                                    gutterBottom color="textPrimary"
                                    component="h5"
                                    align="center"
                                    className="tituloC">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officia odit! Veniam, id optio! In perferendis molestias ad omnis quibusdam, ipsum voluptatibus totam saepe earum minus incidunt id qui! Repellendus!
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}> {/*12 equipe dev*/}
                        <Box paddingX={20} >
                            <Typography
                                variant="h1"
                                gutterBottom color="textPrimary"
                                component="h1"
                                align="center"
                                className='tituloC'>
                                Equipe de desenvolvedores:
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid container xs={12}> {/* 3,3,3,3 devs*/}
                        <Grid container item alignItems='center' xs={3}>
                            <Grid item xs={12}>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" width="120px" height="120px" />
                            </Grid>
                            <Grid item xs={12}>
                                texto
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redesC' />
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redesC' />
                                </a>
                            </Grid>
                        </Grid>
                        <Grid container item alignItems='center' xs={3}>
                            <Grid item xs={12}>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" width="120px" height="120px" />
                            </Grid>
                            <Grid item xs={12}>
                                texto
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redesC' />
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redesC' />
                                </a>
                            </Grid>
                        </Grid>
                        <Grid container item alignItems='center' xs={3}>
                            <Grid item xs={12}>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" width="120px" height="120px" />
                            </Grid>
                            <Grid item xs={12}>
                                texto
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redesC' />
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redesC' />
                                </a>
                            </Grid>
                        </Grid>
                        <Grid container item alignItems='center' xs={3}>
                            <Grid item xs={12}>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" width="120px" height="120px" />
                            </Grid>
                            <Grid item xs={12}>
                                texto
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redesC' />
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redesC' />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12}> {/* 4,4,4 devs*/}
                        <Grid container item alignItems='center' xs={4}>
                            <Grid item xs={12}>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" width="120px" height="120px" />
                            </Grid>
                            <Grid item xs={12}>
                                texto
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redesC' />
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redesC' />
                                </a>
                            </Grid>
                        </Grid>
                        <Grid container item alignItems='center' xs={4}>
                            <Grid item xs={12}>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" width="120px" height="120px" />
                            </Grid>
                            <Grid item xs={12}>
                                texto
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redesC' />
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redesC' />
                                </a>
                            </Grid>
                        </Grid>
                        
                        <Grid container item alignItems='center' xs={4}>
                            <Grid item xs={12}>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" width="120px" height="120px" />
                            </Grid>
                            <Grid item xs={12}>
                                texto
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redesC' />
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redesC' />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}


export default Contato;