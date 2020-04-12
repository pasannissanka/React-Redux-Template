import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
   root: {
       
   },
   data_display: {
       marginTop: theme.spacing(4),
   },
   paper: {
       height: theme.spacing(30),
   },
   title: {
       marginLeft: theme.spacing(2),
       marginTop: theme.spacing(2),
   }
}));

export default function ScrollCard(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container className={classes.data_display}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <div className={classes.title}>
                            <Typography variant="h6">{props.title}</Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}