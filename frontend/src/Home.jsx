import React, { Component } from 'react';
import './App.css'

class Home extends Component {
  state={name: "", email: "", users: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {name, email} = this.state

    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      this.setState({name: "", email: ""});
      alert("User Registered Successfully")
    } else {
      alert("Failed to register user")
    }
  }

  onRetrieveUsers = async () => {
    const response = await fetch('http://localhost:5000/api/users');
    if (response.ok) {
      const users = await response.json();
      this.setState({ users });
    } else {
      alert("Failed to retrieve users");
    }
  }

  render() {
    const { name, email, users } = this.state;
    return (
    <div>
      <h1>Form</h1>
      <form onSubmit={this.onSubmitForm}>
        <input type="text" value={name} onChange={this.onChangeName} placeholder="Enter Name" />
        <input type="email" value={email} onChange={this.onChangeEmail} placeholder="Enter Email" />
        <button type="submit">Register</button>
        <button type="button" onClick={this.onRetrieveUsers}>Retrieve</button>
      </form>
      {users.length > 0 && (
        <div>
          <hr />
          <h2>Registered Users</h2>
          <ul>
            {users.map(user => (
              <li key={user._id}>
                <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
  }
}

export default Home;