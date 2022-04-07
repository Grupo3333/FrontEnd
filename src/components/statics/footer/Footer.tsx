import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    var footerComponent
    if (token !== "") {
        footerComponent = <Grid className="box1" container xs={12}> {/* 3,3,3,3 devs*/}
            <Grid container item alignItems='center' xs={6}>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" align="left" gutterBottom className='textos' >Â© 2022 Copyright:</Typography>
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom className='textos text-decorator-none' align="left" >brasil.generation.org</Typography>
                    </a>
                </Grid>
            </Grid>
            <Grid direction="column" container item xs={6}>
                <Box display='flex' justifyContent="flex-end" >

                    <Typography variant="h6" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>

                    <a href="https://www.facebook.com/generationbrasil" target="_blank">
                        <FacebookIcon className='redes' />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
                </Box>
            </Grid>
        </Grid>

    }
    return (

        <>
            {
                footerComponent
            }

        </>
    )
}

export default Footer;
