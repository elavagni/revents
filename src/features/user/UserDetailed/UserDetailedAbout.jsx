import React from "react";
import { Segment, Grid, Header } from "semantic-ui-react";
import UserDetailedInterest from "./UserDetailedInterest";
import { format } from "date-fns";

const UserDetailedAbout = ({ profile }) => {
  let createdAt;
  if(profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), 'd MMM yyyy')
  }
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon="smile" content={"About " + profile.displayName} />
            <p>
              I am a: <strong>{profile.occupation || 'tbn'}</strong>
            </p>
            <p>
              Originally from <strong>{profile.origin || 'tbn'}</strong>
            </p>
            <p>
              Member Since: <strong>{createdAt}</strong>
            </p>
            <p>{profile.about}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            {profile && profile.interests &&
            <UserDetailedInterest profile={profile} />}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedAbout;
