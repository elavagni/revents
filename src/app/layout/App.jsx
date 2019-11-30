import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter} from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import ModalManager from "../../features/modals/ModalManager";
import { UserIsAuthenticated } from '../../features/auth/authWrapper'
import NotFound from "./NotFound";

class App extends Component {
  render() {
 
    const disclaimerContainer = {
      color: '#276f86',  
      backgroundColor: '#f8ffff',
      padding: '10px',
      marginBottom: '10px',
      marginTop: '10px'      
    };   

    return (
      <Fragment>
        <ModalManager/>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events/" component={EventDashboard} />
                  {/*<Route path="/test/" component={TestComponent} />*/}
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/people/" component={UserIsAuthenticated(PeopleDashboard)} />
                  <Route path="/profile/:id" component={UserIsAuthenticated(UserDetailedPage)} />
                  <Route path="/settings/" component={UserIsAuthenticated(SettingsDashboard)} />
                  <Route path={["/createEvent/", "/manage/:id"]} component={UserIsAuthenticated(EventForm)} />                  
                  <Route component={NotFound} />
                </Switch>                
              </Container>
            </Fragment>
          )}
        />
        <Container style={disclaimerContainer}>               
          <div className="ui Tiny label" style={{color:"#276f86",  backgroundColor:"#f8ffff"}}>
              Re-vents is a fictional website, created for the online course <span>Build an app with React, Redux and Firestore from scratch.</span> 
              This website comes "as is" without warranty of any kind, and it should not be used as a real application.  Thanks to the original author Neil Cummings. Implemented by Eric Lavagni. 
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(App);
