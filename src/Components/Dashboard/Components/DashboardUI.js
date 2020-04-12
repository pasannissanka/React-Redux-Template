import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core';
import ScrollCard from './ScrollCard';


const useStyles = theme => ({
    root: {
        margin: 10
    },
    heading: {},
});

class DashboardUI extends React.Component {

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <div className={classes.heading}>
                    <Typography variant="h5">Good morning, UserName</Typography>
                    {/* <Greating msg>, <User name> */}
                </div>
                <ScrollCard title="Notifications" />
                <ScrollCard title="Project/<ProjectName>"/>
            </div>
        )
    }
}

DashboardUI.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(DashboardUI)
