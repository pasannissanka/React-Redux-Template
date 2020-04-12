import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, Router } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import RegisterPage from './Components/Auth/register';
import { DashboardLayout } from './Components/Dashboard/Layouts/Dashboard_layout';
import {LoginPage} from './Components/Auth/login'
import { PrivateRoute } from './Components/PrivateRoute';
import { history } from './Helpers/history';
import { alertActions } from './Actions/alert.actions';



class App extends React.Component {
  constructor(props) {
    super(props)

    history.listen((location, action) => {
      this.props.clearAlerts()
    })
  }


  render() {
    const { alert } = this.props;
    return (
      <div className="App">
        {/* {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        } */}
        <Router history={history}>
          {/* <Header /> */}
          <Switch>
            <PrivateRoute exact path="/" component={DashboardLayout} />
            {/* <Route exact path="/" component={DashboardLayout} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            {/* <Route path="/home" component={DashboardLayout} /> */}
            {/* <Route  component={NotFound404} /> */}
            <Redirect from="*" to="/" />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}


function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
