import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import bgImg from '../../Assets/bg.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    bg_img: {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    TitleTxt: {
        marginTop: '50px',
        color: theme.palette.grey[50],
    }
}));

export default function LandingPage() {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <CssBaseline />
            <Grid item xs={8} className={classes.bg_img}>
                <Typography variant="h2" className={classes.TitleTxt} >Lets chat <span>👋</span>...</Typography>
            </Grid>
            {/* <SignInComponent /> */}
        </Grid>
    )
}