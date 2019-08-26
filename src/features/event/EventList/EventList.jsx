import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";
import InfinitiveScroll from 'react-infinite-scroller'

class EventList extends Component {
  render() {
    const { events, getNextEvents, loading, moreEvents} = this.props;
    return (
      <Fragment>
        {events && events.legth !== 0 &&
          <InfinitiveScroll
            pageStart = {0}
            loadMore = {getNextEvents}
            hasMore = {!loading && moreEvents}
            initialLoad = {false}
          >
            {events && events.map(event => (
              <EventListItem
                key={event.id}
                event={event}                        
              />
            ))}
          </InfinitiveScroll>
        }
        
      </Fragment>
    );
  }
}

export default EventList;
