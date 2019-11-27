import React from "react";
import { Button, Icon } from "semantic-ui-react";

const SocialLogin = ({socialLogin}) => {
  return (
    <div>
      <Button
        onClick = {() => socialLogin('facebook')}
        type="button"
        style={{ marginBottom: "10px" }}
        fluid
        color="facebook"
      >
        <Icon name="facebook" /> Login with Facebook
      </Button>

      {/* <Button 
        onClick = {() => socialLogin('google')}
        type="button" fluid color="google plus">
        <Icon name="google plus" />
        Login with Google
      </Button> */}
      
      <Button 
        onClick = {() => socialLogin('microsoft.com')}
        type="button" fluid color="twitter">
        <Icon name="windows" />        
        Login with Microsoft
      </Button>
    </div>
  );
};

export default SocialLogin;
