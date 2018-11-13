import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const FormDiv = styled.div`
display: flex;
margin: 15% 0% 0% 40%;
flex-wrap: wrap;
flex-direction: column;
`

export default class NewAppointment extends Component {
  state = {
    newAppointment: {
      date: '',
      time: '',
      service: ''
    },
    redirect: false
  }
  componentDidMount() {
    const script = document.createElement("script");

        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;

        document.body.appendChild(script);

  }
  addnewAppointment = async (event) => {
    event.preventDefault()
    const response = await axios.post (`/api/users/user.id/appointments`, this.state.newAppointment)
    const newAppointment = [this.state.newAppointment]
    newAppointment.push(response.data)
    this.setState ({ newAppointment })
    this.setState ({redirect: true })
  }
  render() {

    if (this.state.redirect) {
      return <Redirect to={`/users/user.id/appointments`} />
    }
    return (
      <div>

        <div class="calendly-inline-widget" data-url="https://calendly.com/drmarable" style={{height: '100vh'}}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" onClick={this.addnewAppointment} /> 
        </div>
        
    )
  }
}