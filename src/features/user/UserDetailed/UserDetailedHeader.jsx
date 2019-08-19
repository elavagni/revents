import React from "react";
import { Segment, Item, Header, Grid } from "semantic-ui-react";
import differenceInYears from "date-fns/differenceInYears";
import LazyLoad from "react-lazyload";

const UserDetailedHeader = ({ profile }) => {
  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
          <LazyLoad height={150} placeholder={<Item.Image avatar size='small' src={"/assets/user.png"} />}>
              <Item.Image
                avatar
                size="small"
                src={profile.photoURL || "/assets/user.png"}
              />
            </LazyLoad>
            <Item.Content verticalAlign="bottom">
              <Header as="h1">{profile.displayName}</Header>
              <br />
              <Header as="h3">{profile.occupation}</Header>
              <br />
              <Header as="h3">
                {getUserAge(profile.dateOfBirth)}, Lives in{" "}
                {profile.city || "unknown city"}
              </Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  );
};

const getUserAge = dateOfBirth => {
  let age;
  if (dateOfBirth) {
    age = differenceInYears(Date.now(), dateOfBirth.toDate());
  } else {
    age = "unknown age";
  }
  return age;
};

export default UserDetailedHeader;
