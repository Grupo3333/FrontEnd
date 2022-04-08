import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Box, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
                    <Typography variant="h1" gutterBottom color="textPrimary" component="h1" align="center" className='tituloC'>Sobre nós!</Typography>
                </Box>
            </Grid>
            <Grid container item> {/*queremos atingir 6 + texto 6*/}
                <Grid item xs={6} sm={6}  >
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
                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box paddingBottom={7} >
                            <Typography variant='h3' component='h3' align='center' className='box-texto'>
                                Equipe de desenvolvedores:
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container item alignItems='center'> {/*oq é cultivar 6 + foto 6*/}
                <Grid item xs={3} sm={3} >
                    <Box paddingX={5} >
                        <Card className={classes.root}>
                            <CardHeader
                                title="Denner Vieira"
                            />
                            <CardMedia
                                className={classes.media}
                                image="https://i.imgur.com/smpk0mP.jpg"
                                title="foto do denner"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    oi, eu sou o denner. tenho 24 anos e sou desenvolvedor FullStack Jr.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <a target="_blank" href="https://www.linkedin.com/in/denner-vieira-1b597693/">
                                    <IconButton aria-label="add to favorites">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a target="_blank" href="https://github.com/Dennerv">
                                    <IconButton aria-label="share">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={3} sm={3}>
                    <Box paddingX={5} >
                        <Card className={classes.root}>
                            <CardHeader
                                title="Geraldo Vedrossi"
                            />
                            <CardMedia
                                className={classes.media}
                                image="https://i.imgur.com/CRPLqKQ.jpg"
                                title="foto Geraldo"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    denner
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <a target="_blank" href="https://www.linkedin.com/in/geraldovn/">
                                    <IconButton aria-label="add to favorites">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a target="_blank" href="https://github.com/geraldovedrossi">
                                    <IconButton aria-label="share">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={3} sm={3}>
                    <Box paddingX={5} >
                        <Card className={classes.root}>
                            <CardHeader
                                title="Giulia Potenza"
                            />
                            <CardMedia
                                className={classes.media}
                                image="https://i.imgur.com/CRPLqKQ.jpg"
                                title="foto Giulia"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    a definir
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <a target="_blank" href="https://www.linkedin.com/in/giulia-potenza/">
                                    <IconButton aria-label="add to favorites">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a target="_blank" href="https://github.com/Gifaela">
                                    <IconButton aria-label="share">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={3} sm={3}>
                    <Box paddingX={5} >
                        <Card className={classes.root}>
                            <CardHeader
                                title="Keyla Dias"
                            />
                            <CardMedia
                                className={classes.media}
                                image="https://i.imgur.com/MUezM2E.jpg"
                                title="foto Lara"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    a definir
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <a target="_blank" href="https://www.linkedin.com/in/keyla-dias-bb358a224/">
                                    <IconButton aria-label="add to favorites">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a target="_blank" href="https://github.com/keylaDias">
                                    <IconButton aria-label="share">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
            </Grid >

            <Grid container item alignItems='center' justifyContent='space-evenly'> {/*oq é cultivar 6 + foto 6*/}

                <Grid item xs={3} sm={3} >
                    <Box paddingX={5} marginTop={5} >
                        <Card className={classes.root}>
                            <CardHeader
                                title="Lara Lourenço"
                            />
                            <CardMedia
                                className={classes.media}
                                image="https://i.imgur.com/1tDhHhi.jpg"
                                title="foto Lara"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    denner
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <a target="_blank" href="https://www.linkedin.com/in/laralouren%C3%A7o/">
                                    <IconButton aria-label="add to favorites">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a target="_blank" href="https://github.com/laralrnc">
                                    <IconButton aria-label="share">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={3} sm={3}>
                    <Box paddingX={5} marginTop={5} >
                        <Card className={classes.root}>
                            <CardHeader
                                title="Rafael Nunes"
                            />
                            <CardMedia
                                className={classes.media}
                                image="https://i.imgur.com/pBYBURK.jpg"
                                title="foto Rafael"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    denner
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <a target="_blank" href="https://www.linkedin.com/in/rrafaelnunes/">
                                    <IconButton aria-label="add to favorites">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a target="_blank" href="https://github.com/RafaelNunesDaSilva">
                                    <IconButton aria-label="share">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={3} sm={3}>
                    <Box paddingX={5} marginTop={5} >
                        <Card className={classes.root}>
                            <CardHeader
                                title="Robson "
                            />
                            <CardMedia
                                className={classes.media}
                                image="https://i.imgur.com/k58zDx0.jpg"
                                title="foto Robson"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    denner
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <a target="_blank" href="https://www.linkedin.com/in/robson-morais-130725236/">
                                    <IconButton aria-label="add to favorites">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a target="_blank" href="https://github.com/RobsonM12">
                                    <IconButton aria-label="share">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>

                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

            </Grid>

        </Grid >
    );
}
