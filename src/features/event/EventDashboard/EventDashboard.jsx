import React, { Component } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { getEventsForDashboard } from '../eventActions';
import EventList from "../EventList/EventList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends Component {
  
  state = {
    moreEvents: false, 
    loadingInitial: true,
    loadedEvents: []
  }
  async componentDidMount() {
    let next = await this.props.getEventsForDashboard();    
    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreEvents: true,
        loadingInitial: false
      })
    }

    this.setState({      
      loadingInitial: false
    })
 
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.events !== prevProps.events) {
      this.setState({
        loadedEvents: [...this.state.loadedEvents, ...this.props.events]
      })
    }
  }

  getNextEvents = async () => {
    const {events} = this.props;
    let lastEvent = events && events[events.length - 1];    
    let next = await this.props.getEventsForDashboard(lastEvent);    
    if (!next || (next && next.docs && next.docs.length <= 1)) {
      this.setState({
        moreEvents: false
      })      
    }             
  }

  render() {
    const { loading } = this.props;
    const {moreEvents, loadedEvents} = this.state;
    if (this.state.loadingInitial) return <LoadingComponent />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList 
              loading = {loading}
              events={loadedEvents} 
              moreEvents = {moreEvents}
              getNextEvents={this.getNextEvents}
          />      
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
        <Grid.Column width={10}>
          <Loader active={loading}></Loader>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
