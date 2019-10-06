import React from 'react';
import HomeNavbar from '../../components/home-navbar/HomeNavbar'


class Profile extends React.Component {
  render() {
    const { params } = this.props.match
    console.log(this.props)
    return (
      <section>
        <HomeNavbar/>

        <h1> Profile </h1>
        <p> {params.id} </p>

      </section>
    )
  }
}

export default Profile
