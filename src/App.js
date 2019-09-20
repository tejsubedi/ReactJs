import React, { Component } from 'react';
import axios from 'axios';
import {Loading} from './Loading';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  };

  getUsers() {
    this.setState({
      loading: true,
    });

    axios(`https://api.randomuser.me/?nat=US&results=5`)
    .then((response)=>this.setState({
      users: [...this.state.users, ...response.data.results],
      loading: false


    }));


  };

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log('More users loaded');
  }

  componentWillMount() {
    this.getUsers();
  };

  


  render() {
    return (
      <div className="container">
        {!this.state.loading ? this.state.users.map(user => 
          <div>
            <h3>{user.name.first} </h3>
            <h6>{user.email} </h6>
            <hr/>
            <form  onSubmit={this.handleSubmit}>
              <input type="submit" value="load users" />
            </form>
            </div>): (<Loading message = "Hello this page is loading....."/>)}
      </div>
    );
  }

}

export default App;
