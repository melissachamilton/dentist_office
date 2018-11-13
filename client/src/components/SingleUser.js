import React, { Component, } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Appointments from './Appointments';
import { Button, Header, Container, Icon, Image, Modal } from 'semantic-ui-react'

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
    user: {}
  }

  async componentDidMount() {
    const userId = this.props.match.params.id
    const user = await this.fetchUsers(userId)
    // const appointments = await this.fetchAppointments(userId)

    this.setState({ user })

  }

  fetchUsers = async (id) => {
    const response = await axios.get(`/api/users/${id}`)
    console.log('fetchusers', response)
    return response.data
    

  }
  // fetchAppointments = async (id) => {
  //   const response = await axios.get(`/api/users/${id}/appointments`)
  //  console.log('fetchappointments', response)
  //   return response.data
  // }

  // deleteUser = async () => {
  //     const response = await axios.delete(`/api/users/${this.state.user.id}`)
  //     return response.data
  // }

  render() {

    const users = this.state.user
    // const appointments = this.state.appointments.map((appointments, i) => {
      
      

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
<div>Account Changes</div>

        
  
     
    
  

        

         
</div>

      )

      
    return (

      
      <div>
Welcome {users.first_name}
      
      
        {/* <p>{appointments}</p> */}
      
      
      

        
      </div>
    )
  }
}
