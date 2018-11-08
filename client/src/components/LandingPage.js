import React, { Component } from 'react'
import axios from 'axios'

export default class LandingPage extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    await this.fetchUsers()
  }

  fetchUsers= async () => {
    const response = await axios.get("/api/users");
    this.setState({ users: response.data });
  };

  render() {
    const allUsers = this.state.users.map ((users, i) => {
    return (

      <div key={i}>
        <div>{users.first_name}</div>
        {console.log (users.first_name)}
       </div>

      );
    })

    return (
      <div>
        {allUsers}
      </div>
    );
    }
}
