import React, {Component} from 'react';
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from 'react-redux';
import { Grid } from "semantic-ui-react";
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedAbout from './UserDetailedAbout';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedPhotos from './UserDetailedPhotos';


const mapState = state => ({
    auth: state.firebase.auth,
    user: state.firebase.profile,
    photos: state.firestore.ordered.photos  
});

const query = ({ auth }) => {
    return [
      {
        collection: "users",
        doc: auth.uid,
        subcollections: [{ collection: "photos" }],
        storeAs: "photos"
      }
    ];
  };

class UserDetailedPage extends Component {
    render() {            
        const {user, photos }= this.props;           
        return (
            <Grid>
                <UserDetailedHeader profile={user}/>                
                <UserDetailedAbout profile={user}/>                
                <UserDetailedSidebar/>
                {photos && photos.length > 0 &&
                <UserDetailedPhotos photos={photos}/>}
                <UserDetailedEvents/>                
            </Grid>

        );
    }
}

export default  compose(
    connect(mapState),
    firestoreConnect(auth => query(auth))
)(UserDetailedPage);
