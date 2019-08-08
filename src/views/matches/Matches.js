import React from 'react';
import HomeNavbar from '../../components/home-navbar/HomeNavbar'


class Matches extends React.Component {
  render() {
    const { params } = this.props.match
    console.log(this.props)
    return (
      <section>
        <HomeNavbar appName="Comparte Skill" />

        <h1> Matches </h1>
        <p> {params.id} </p>

      </section>
    )
  }
}

export default Matches
