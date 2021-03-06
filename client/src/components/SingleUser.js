import React, { Component, } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom' 
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Header, Container } from 'semantic-ui-react'

const NavBar  = styled.div`
  color: white;
background-color: blue;
display: flex;
height: 100%;
width: 100%;`

const CardDiv = styled.div`
  height: 150px;
  padding: 3%;
  width: 450px;
  text-align: center;
  margin: 5%
  img {
    opacity: 0.6;
  }
  img:hover {
   opacity: 1;
 }
 border-style: solid;
 border-radius: 30px;
`;

export default class SingleUser extends Component {
  state = {
    user: {}, 
    redirect: false
  }

  async componentDidMount() {
    const userId = this.props.match.params.id
    const user = await this.fetchUsers(userId)
    this.setState({ user })
  }

  fetchUsers = async (id) => {
    const response = await axios.get(`/api/users/${id}`)
    console.log('fetchusers', response)
    return response.data
  }

  deleteUser = async (id) => {
    const response = await axios.delete(`/api/users/${this.state.user.id}`)
    console.log("delete", response)
    this.setState({redirect: true})
    return response.data
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/users`} />
    }

    const users = this.state.user
      return  (
        <div>
          <NavBar>
          <Container fluid>
    <Header as='h2'>Welcome {users.first_name}</Header>
  </Container>
</NavBar>

<div>
<Link to = {`/users/${users.id}/appointments`} > Appointments
</Link>
</div>
<div>
<Link to = {`/users/${users.id}/billing`} > Billing
</Link>
</div>
<input type='submit' value='Delete Profile' onClick= {(e) => this.deleteUser(users.id)} />         
</div>
    )   
    return (    
      <div>
Welcome {users.first_name}
      </div>
    )
  }
}
