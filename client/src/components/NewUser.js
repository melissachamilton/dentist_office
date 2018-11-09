import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const FormDiv = styled.div`
display: flex;
margin: 15% 0% 0% 40%;
flex-wrap: wrap;
flex-direction: column;
`


export default class NewUser extends Component {
    state = {
        newUser: {
          first_name: '',
          last_name: '',
          address: '',
          insurance: ''
        },
        redirect: false
    }

    handleNewUser = (event) => {
      let user = {...this.state.newUser}
      user[event.target.name] = event.target.value
      console.log(user)
      this.setState({ newUser: user })
    }

    addNewUser = async (event) => {
      event.preventDefault()
      // const newUser = this.state.newUser
        const response = await axios.post(`/api/users`, this.state.newUser)
        // console.log(response)
        const newUser = [this.state.newUser]
        newUser.push(response.data)
        this.setState({ newUser })
        this.setState ({redirect: true })

    }
    render() {

      if (this.state.redirect) {
        return <Redirect to={`/users`} />
      }

        return(
          
<FormDiv>
<h1>Create a New Account!</h1>
        <form>
          <div><input name="first_name" type="text" placeholder="First_Name" onChange={this.handleNewUser} /></div>
          <br></br>
          <div><input name="last_name" type="text" placeholder="Last_Name" onChange={this.handleNewUser} /></div>
          <br></br>
          <div><input name="address" type="text" placeholder="Address" onChange={this.handleNewUser} /></div>
          <br></br>
          <div><input name="insurance" type="text" placeholder="Insurance" onChange={this.handleNewUser} /></div>
          <br></br>
          <div><input type="submit" value="Add New User" onClick={this.addNewUser} /> </div>
        </form>
      </FormDiv>
  
        )
    }
}