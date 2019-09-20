import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

  };

  componentWillMount() {
    axios(`https://api.randomuser.me/?nat=US&results=5`)
      .then((response)=>this.setState({
        users: response.data.results
      }));
  }


  render() {
    return (
      <div className="container">
        {this.state.users.map(user => 
          <div>
            <h3>{user.name.first}</h3>
            <hr/>
            <h3>{user.cell}</h3>
            <hr/>
            <h3>{user.name.last}</h3>
            </div>)}
      </div>
    );
  }

}

export default App;
