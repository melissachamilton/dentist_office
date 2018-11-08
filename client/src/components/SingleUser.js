import React, { Component, } from 'react'
import {Link} from 'react-router-dom' 
import axios from 'axios'


export default class SingleUser extends Component {
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
        <div key={i}>
       <div> {appointments.date}</div>
       {console.log (appointments.date)}
       <Link to="/users/:id"><h1>Delete</h1></Link>
       <div>{username.first_name}</div>
        </div>
      )
})
      
    return (

      appointments 
    )
  }
}