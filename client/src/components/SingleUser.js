import React, { Component, } from 'react'
import {Link} from 'react-router-dom' 
// import { Redirect } from 'react-router-dom'
import axios from 'axios'


export default class SingleUser extends Component {
  state = {
    user: {},
    appointments: [],
  }

  async componentDidMount() {
    const userId = this.props.match.params.id
    const user = await this.fetchUsers(userId)
    const appointments = await this.fetchAppointments(userId)

    this.setState({ user, appointments })

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

  deleteUser = async () => {
      const response = await axios.delete(`/api/users/${this.state.user.id}`)
      console.log(response)
      return response.data
  }

  render() {

    const username = this.state.user
    const appointments = this.state.appointments.map((appointments, i) => {

      return (
        <div key={i}>

       <div> {appointments.date}</div>
       {/* <Link to={`/users/:id`}> <h1>Destroy</h1></Link> */}
       <div>{username.first_name}</div>

       {/* <%= link_to 'Patient Portal', patient_path(@user) %> */}

       {/* <Link to={`/users`}> <h1>Delete</h1></Link> */}
       
       </div>
      )
})
      
    return (
<div>
      {appointments}
      <form>
      <div><input type="submit" value="Delete User" onClick={this.deleteUser } /> </div>
      </form>
        </div>
    )
  }
}