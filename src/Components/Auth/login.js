import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Paper, Avatar, TextField, Typography, FormControlLabel, Checkbox, Button, Link } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons'
import { userActions } from '../../Actions/user.actions';
import { connect } from 'react-redux';

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

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            submitted: false
        }
        this.props.logout();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log( 'Email:', this.state.email, 'Password: ', this.state.password); 

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
            console.log( 'Email:', this.state.email, 'Password: ', this.state.password); 
        }
    }
    render() {
        const { classes } = this.props;
        const { email, password, submitted } = this.state;

        return (
            <Grid container className={classes.root} justify="center">
                <Grid item xs={4} component={Paper} elevation={3} square>
                    <div className={classes.Paper}>
                        <Avatar><LockOutlined /></Avatar>
                        <Typography variant="h4">Sign in</Typography>
                        <form onSubmit={this.handleSubmit} className={classes.form} >
                            <TextField id="outlined-basic" name="email" label="Email address" variant="outlined" fullWidth required margin="normal" value={this.state.email} onChange={this.handleChange} />
                            <TextField id="outlined-basic" name="password" label="Password" variant="outlined" fullWidth required margin="normal" value={this.state.password} onChange={this.handleChange} />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                // onClick={this.handleSubmit}
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
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

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
const stylePage = withStyles(useStyles)(connectedLoginPage)
export { stylePage as LoginPage }
