import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { UserService } from '../../_services/UserService';


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
    if(response.status === "connected"){

      var data = {
        'provider': 'facebook',
        'token': response.authResponse.accessToken
      }

      UserService.obtainJWT(data)
      .then(data => {
          console.log(data);
          localStorage.setItem('Token', data.token);
          this.props.history.push("/matches");
      });

      localStorage.setItem('Token', response.accessToken);
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
      {scope: 'public_profile, email, user_birthday, user_gender, user_location, user_posts'},
      {auth_type: 'reauthenticate'});
  }

  logout() {
    UserService.logout();
  }

  render() {
    return (
      <div>
        <Button onClick={this.login} variant="outline-warning"> INICIAR CON FACEBOOK </Button>
      </div>
    );
  }
}
