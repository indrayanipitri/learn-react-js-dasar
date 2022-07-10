import React, { Component } from 'react';
import axios from 'axios';

class basicState extends Component {
  constructor() {
    super()

    // this.state = {
    //   name: 'Pipit'
    // }

    this.state = {
      user: []
    }
  }

  getUser = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    this.setState({
      user: response.data
    })
  }

  componentDidMount() {
    this.getUser()
  }
  render() {
    // const name = this.state.name
    const user = this.state.user
    //bisa juga pakai ini
    // const {user} = this.state
    return (
      <>
      {/* <div>Hallo Nama Saya {name}</div> */}
      <div>Hallo Semuanya.. Nama saya {user.name}</div>
      <div>Username saya {user.username}</div>
      </>
    )
  }
}

export default basicState;