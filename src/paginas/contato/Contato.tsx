import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Box, Grid } from '@material-ui/core';
import './Contato.css';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid>
            <Grid alignItems="center" item xs={12}> {/*12 quem somos nos*/}
                <Box paddingX={20} >
                    <Typography variant="h3" gutterBottom component="h3" align="center" className='Sobre'>Conheça a nossa iniciativa</Typography>
                </Box>
            </Grid>
            <Grid container item> {/*queremos atingir 6 + texto 6*/}
                <Grid item xs={6} sm={6}  >
                    <Box paddingX={20} >
                        <Typography
                            variant="h4"
                            gutterBottom
                            component="h4"
                            className='Sobre'>
                            Com base na ODS 4. Educação de qualidade, decididos 
                            desenvolver uma rede social que une professores e alunos dispostos a aprender e compartilhar conhecimento.
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={6} sm={6}  >
                    <Box paddingX={20} >
                        <Typography
                            variant="h4"
                            gutterBottom
                            component="h4"
                            className='Sobre'>
                            No nosso espaço permitimos a publicação de tutoriais sobre diversos assuntos e níveis.
                        </Typography>

                    </Box>
                </Grid>

            </Grid>




        </Grid>

        
    );
}
