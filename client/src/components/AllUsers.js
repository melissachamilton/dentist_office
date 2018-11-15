import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Header, Button } from 'semantic-ui-react'
import styled from 'styled-components'


const NavBar  = styled.div`
  color: white;
  text-align: center;
background-color: blue;
height: 500%;
width: 100%;
border-style: solid;
  `

const UserCards = styled.div`
  height: 40px;
  padding: 10%;
  width: 100px;
  text-align: center;
  margin: 15%;
 border-style: solid;
 border-radius: 150px;
 display: flex;
`;

const StyledUsers = styled.div`
height: 30%;
width: 30%;
display: flex;
margin: 10%;
border-spacing: equal
`

const BodyDiv = styled.div``;

export default class AllUsers extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    await this.fetchUsers();
  }

  fetchUsers = async () => {
    const response = await axios.get("/api/users");
    console.log("response", response)
    this.setState ({users: response.data})
  };

  render() {
   
  const allUsers = this.state.users.map((users, i) => {
      
    return (
      <div> 
        {allUsers} 
      
<div key={i}>
<UserCards>
{users.first_name} {users.last_name}

<Link to = {`/users/${users.id}`} ><Button>Login
  </Button> 
</Link>

</UserCards>
</div>
</div>
    
     )
    }) 

    return(
      
      <BodyDiv>

        <NavBar>
      <Header as='h1'>Quality Smiles Dentistry</Header>
 </NavBar>

 <div>
  {allUsers}
    </div>
      
      <Link to = {`/users/new`} ><Button>Create a New Account
</Button>
</Link>

</BodyDiv>
    )
    } 
  }
