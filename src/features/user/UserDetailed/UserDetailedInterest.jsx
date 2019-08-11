import React, { Fragment } from "react";
import { Item, Header, List, Icon } from "semantic-ui-react";

const UserDetailedInterest = ({ profile }) => {
  return (
    <Fragment>
      <Header icon="heart outline" content="Interests" />     
        {profile.interests ? 
         <List>
          {profile.interests.map((interest, index) => (
            <Item key={index}>
              <Icon name="heart" />
              <Item.Content>{interest}</Item.Content>
            </Item>
          ))}
      </List> : <p>No interests</p>}
    </Fragment>
  );
};
export default UserDetailedInterest;
