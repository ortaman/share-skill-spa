import React from 'react';
import HomeNavbar from '../../components/home-navbar/HomeNavbar'


class Matches extends React.Component {
  render() {
    const { params } = this.props.match

    return (
      <section>
        <HomeNavbar/>

        <h1> Matches </h1>
        <p> {params.id} </p>

      </section>
    )
  }
}

export default Matches
