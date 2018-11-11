import React, { Component, } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom' 
import { Redirect } from 'react-router-dom'
import axios from 'axios'

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
      return response.data
  }

  render() {

    const username = this.state.user
    const appointments = this.state.appointments.map((appointments, i) => {
      
      

      return  (
       <div>
        <CardDiv>
                   <div key={i} className="row">
                     <div className="col s12 m7">
                       <div className="card">
                         <div className="card-image">
                          
                           
                          
                         </div>
                         <div className="card-content">
                         <h1>{appointments.date}</h1>
                         <h1>{appointments.time}</h1>
                         <h1>{appointments.service}</h1></div>
                         {/* <h2>{username.first_name}</h2></div> */}
                         <div className="card-action">
                           
                         </div>
                       </div>
                     </div>
                   </div>
                 </CardDiv>

</div>

      )
})
      
    return (
<div>

      {appointments}
      <form>
      <div><input type="submit" value="Delete Appointment" onClick={this.deleteUser } /> </div>
      </form>
        </div>
    )
  }
}
