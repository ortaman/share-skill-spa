import React from 'react';
import HomeNavbar from '../../components/home-navbar/HomeNavbar'


class Search extends React.Component {
  render() {
    const { params } = this.props.match
    console.log(this.props)
    return (
      <section>
        <HomeNavbar/>

        <h1> Searching </h1>
        <p> {params.id} </p>

      </section>
    )
  }
}

export default Search
