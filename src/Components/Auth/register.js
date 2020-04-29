import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Paper, Avatar, TextField, Typography, FormControlLabel, Checkbox, Button, Link } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
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

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
            },

            submitted: false,
            // errors: {}
        };

        this.props.logout();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({ 
            user: {
                ...user,
                [name] : value
            }
         });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submitted: true
        });
        const { user } = this.state;
        if (user.name && user.email && user.password) {
            this.props.register(user);
        }
    }


    render() {
        const { classes } = this.props;
        const { user } = this.state;
        return (
            <Grid container className={classes.root} justify="center"
                alignItems="center">
                <CssBaseline />
                <Grid item xs={4} component={Paper} elevation={3} square>
                    <div className={classes.Paper}>
                        <Avatar><LockOutlined /></Avatar>
                        <Typography variant="h4">Sign up</Typography>
                        <form onSubmit={this.handleSubmit} className={classes.form} >
                            <TextField
                                id="outlined-basic"
                                label="Email address"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                value={user.email}
                                onChange={this.handleChange}
                                type="email"
                                name="email" />
                            <TextField
                                id="outlined-basic"
                                label="User Name"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                value={user.name}
                                onChange={this.handleChange}
                                name="name" />
                            <TextField
                                id="outlined-password-input"
                                type="password"
                                label="Password"
                                variant="outlined"
                                fullWidth required
                                margin="normal"
                                value={user.password}
                                onChange={this.handleChange}
                                name="password" />
                            {/* <TextField
                                id="outlined-password-input"
                                type="password"
                                label="Retype password"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                value={confPassword}
                                onChange={this.handleChange}
                                name="confPassword" /> */}
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

function mapState(state) {
    const { registration } = state.registration;
    return { registration };
}

const actionCreators = {
    register: userActions.register,
    logout: userActions.logout
};

RegisterPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(useStyles)(RegisterPage)

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
const stylePage = withStyles(useStyles)(connectedRegisterPage)
export { stylePage as RegisterPage }