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

const Footer  = styled.div`
color: white;
text-align: center;
background-color: blue;
height: 500%;
width: 100%;
border-style: solid;
`

const StyledLogo = styled.img`
  height: 3%;
  width: 100%;
  align-content: right
`;


export default class LandingPage extends Component {
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
<Link to = {`/users/${users.id}`} ><Button>Login
  </Button> 
</Link>

</div>
    
     )
    }) 

    return(
        <NavBar>
      <Header as='h1'>Quality Smiles Dentistry</Header>
  <StyledLogo src="/images/logo.jpg"/>
 <Footer>
  <Link to = {`/users/new`} ><Button>Create a New Account
</Button>
</Link>

<Link to = {`/users`} ><Button>Login
</Button>
</Link>

</Footer>

 </NavBar>
    )
   
    } 
  }
