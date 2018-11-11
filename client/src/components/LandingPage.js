import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class LandingPage extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    await this.fetchUsers();
  }

  fetchUsers = async () => {
    const response = await axios.get("/api/users");
    console.log("response", response)
    this.setState ({users: response.data})
  };


  render() {

  const allUsers = this.state.users.map((users, i) => {
  
      
    return (
<div key={i}>
<Link to = {`/users/${users.id}`} >{users.first_name} {users.last_name}
</Link>
</div>
    
     )
    }) 

    return(
      allUsers 
    )
// allUsers.first_name
   
    } 
  }
