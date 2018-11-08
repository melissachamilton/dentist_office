import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FormDiv = styled.div`
display: flex;
margin: 15% 0% 0% 40%;
flex-wrap: wrap;
flex-direction: column;
`


export default class NewUser extends Component {
    state = {
        user: {},
        newUser: {}
    }

    async componentDidMount() {
        const userId = this.props.match.params.id
        const user = await this.fetchUser(userId)

        this.setState({ user })
    }

    fetchUser = async(id) => {
const response = await axios.get(`/api/users/${id}`)
return response.data
    }

    handleNewPost = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newUser = {...this.state.newUser}
        newUser[attributeName] = attributeValue

        this.setState({ newUser })
    }

    addNewUser = async (event) => {
        const user = this.state.user
        event.preventDefault()
        const response = await axios.post(`/api/users`, this.state.newUser)
        // const posts = [...this.state.posts]
        user.push(response.data)
        // this.setState({ posts })

    }
    render() {

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
          <div><input type="submit" value="Add New User" onClick={this.addNewUser} /></div>
        </form>
      </FormDiv>
  
        )
    }
}