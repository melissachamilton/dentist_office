import React, { Component } from 'react'
import axios from 'axios'


export default class SingleUser extends Component {
  state = {
    user: {},
    appointments: []
  }

  async componentDidMount() {
    const userId = this.props.match.params.id
    const user = await this.fetchUsers(userId)
    // const appointments = await this.fetchAppointments(userId)

    this.setState({ user })

  }

  fetchUsers = async (id) => {
    const response = await axios.get(`/api/users/${id}`)
    { console.log(response.data) }
    return response.data

  }
  // fetchAppointments = async (id) => {
  //   const response = await axios.get(`/api/users/${id}/appointments`)
  //   {console.log (response)}
  //   return response.data
  //   { console.log("This is appointments response") }
  // }

  render() {
    // const user = this.state.user
    // const appointments = this.state.user.map((appointments, i) => {
    //   return (
    //     <div key={i}>
    //       <div>{appointments.date}</div>
    //     </div>
    //   )
    // })
    return (
      <div>
        {/* {appointments} */}

      </div>
    )
  }
}
