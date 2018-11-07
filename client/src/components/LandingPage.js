import React, { Component } from 'react'
import axios from 'axios'

export default class LandingPage extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    await this.fetchUsers();
  }

  fetchUsers= async () => {
    const response = await axios.get("/users");
    this.setState({ users: response.data });
  };

  render() {
    const allUsers = this.state.users.map ((users, i) => {
    return (
      <div> {allUsers} </div>

      );
    })

    return (
      <p> "Works" </p>
      
      
    );
    }
}
