import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Paper, Avatar, TextField, Typography, FormControlLabel, Checkbox, Button, Link } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons'

const useStyles = theme => ({
    root: {
        height: '100vh',
        alignItems: 'center',
        display: 'flex',
    },
    Paper: {
        alignItems: 'center',
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
    },
});

class RegisterPage extends React.Component {


    render() {
        const { classes } = this.props
        return (
            <Grid container className={classes.root} justify="center"
                alignItems="center">
                <CssBaseline />
                <Grid item xs={4} component={Paper} elevation={3} square>
                    <div className={classes.Paper}>
                        <Avatar><LockOutlined /></Avatar>
                        <Typography variant="h4">Sign up</Typography>
                        <form action="" className={classes.form} >
                            <TextField id="outlined-basic" label="Email address" variant="outlined" fullWidth required margin="normal" />
                            <TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth required margin="normal" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth required margin="normal" />
                            <TextField id="outlined-basic" label="Retype password" variant="outlined" fullWidth required margin="normal" />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                        </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        {/* By clicking Sign up, you're agreeing to terms and services */}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

RegisterPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(RegisterPage)