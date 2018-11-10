import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleUser from './SingleUser';

const NavBarComponent = styled.div`
color: white;
background-color: rgb(0, 100, 150);
display: flex;
height: 100%;
width: 100%;
`
const FloatingButtonDiv = styled.button`
font-family: Verdana, sans-serif;
font-size: 40px;

background-color: rgb(0,177,166);
position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	color: white;
	border-radius:50px;
  text-align:center;
	box-shadow: 2px 2px 3px #999;
`

export default class PatientPortal extends Component {
  state = {
    user: {},
    appointments: []
  }

  async componentDidMount() {
    const userId = this.props.match.params.id
    const user = await this.fetchUsers(userId)
    const appointments = await this.fetchAppointments(userId)

    this.setState({ user, appointments })

  }

  fetchUsers = async (id) => {
    const response = await axios.get(`/api/users/${id}`)
    return response.data

  }
  fetchAppointments = async (id) => {
    const response = await axios.get(`/api/users/${id}/appointments`)
    return response.data
  }
  render() {
    const username = this.state.user
    const appointments = this.state.appointments.map((appointments, i) => {

    return (
      <div>
<div key={i}>
       <div> {appointments.date}</div>
       <div>{username.first_name}</div>
        </div>
      <NavBarComponent>
        <h1>Patient Portal</h1>
        
        <div className="four ui buttons">
      
  <Link to ="/users/:id"><button className="ui button"> Appointments</button> </Link>
  <button className="ui button">Billing</button>
  <button className="ui button">Payments</button>
  <button className="ui button">Account Changes</button>
  </div>
 
</NavBarComponent> 

</div>
    


    )
    })
    return (
      <div>
  {/* <h1>{username.first_name}'s' Upcoming Appointments</h1> */}
      {username.first_name}'s {appointments}
      <form>
      <div><input type="submit" value="Delete Appointment" onClick={this.deleteUser } /> </div>
      </form>
        </div>
    )
  }
    }