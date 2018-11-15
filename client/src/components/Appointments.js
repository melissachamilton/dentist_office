import React, { Component, } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Container, Header, Button } from 'semantic-ui-react'

const NavBar = styled.div`
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


export default class Appointments extends Component {
  state = {
    user: {},
    appointments: [],
    providers: [],
    redirect: false
  }

  async componentDidMount() {
    const userId = this.props.match.params.id
    const user = await this.fetchUsers(userId)
    const appointments = await this.fetchAppointments(userId)
    const providers = await this.fetchProviders
    this.setState({ user, appointments, providers })

  }

  fetchUsers = async (id) => {
    const response = await axios.get(`/api/users/${id}`)
    console.log('fetchusers', response)
    return response.data


  }
  fetchAppointments = async (id) => {
    const response = await axios.get(`/api/users/${id}/appointments`)
    console.log('fetchappointments', response)
    return response.data
  }

  fetchProviders = async (id) => {
    const response = await axios.get(`/api/appointments/${this.state.appointments}/providers`)
    console.log('fetchproviders', response)
    return response.data
  }

  deleteAppointment = async (id) => {
    const response = await axios.delete(`/api/users/${this.state.user.id}/appointments/${id}`)
    console.log("delete", response)
    this.setState({redirect: true})
    return response.data
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={`/users/${this.state.user.id}`} />
    }

    const users = this.state.user
    const appointments = this.state.appointments.map((appointment, i) => {
      return (
        <div>
          <NavBar>
            <Container fluid>
              <Header as='h2'>Appointments</Header>
            </Container>
          </NavBar>
          <div key={i}>
            <div>{appointment.date}</div>
            <div>{appointment.time}</div>
            <div>{appointment.service}</div>
            <div>{appointment.provider_id}</div>
            <input type='submit' value='Delete Appointment' onClick= {(e) => this.deleteAppointment(appointment.id)} />
          </div>
        </div>
      )
    })
    return (
      <div>
        {appointments}
        <Link to={`/users/${users.id}/appointments/new`}>
          <Button>New Appointment</Button>
        </Link> 
      </div>

    )
  }
}


