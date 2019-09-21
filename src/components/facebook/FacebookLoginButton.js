import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


export default class FacebookLoginButton extends Component {
  
  componentDidMount() {

    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '646847972390315',
        cookie     : true,
        status     : true,
        xfbml      : true,
        version    : 'v4.0'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback = (response) => {
    console.log(response);

    if(response.status === "connected"){

      localStorage.setItem('Token', response.accessToken);
      this.props.history.push("/matches");
    }
    else if (response.status === 'not_authorized') {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
    }
  }

  checkLoginStatus = () => {
    window.FB.getLoginStatus(this.statusChangeCallback);
  }

  login = () => {
    window.FB.login(
      this.statusChangeCallback, 
      {scope: 'public_profile'},
      {auth_type: 'reauthenticate'});
  }

  logout() {
    localStorage.removeItem('Token');
    window.FB.logout();
  }

  render() {
    return (
      <div>
        <Button onClick={this.login} variant="outline-warning"> INICIAR CON FACEBOOK </Button>
      </div>
    );
  }
}
