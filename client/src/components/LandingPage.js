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
      <div>

      

<div key={i}>
<Link to = {`/users/${users.id}`} >{users.first_name} {users.last_name}
</Link>
</div>



</div>
    
     )
    }) 

    return(
      <div>
      {allUsers} 

      <Link to = {`/users/new`} >Create an account
</Link>
</div>
    )
   
    } 
  }
