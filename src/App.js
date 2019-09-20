import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };

  };

  componentWillMount() {
    axios(`https://api.randomuser.me/?nat=US&results=5`)
      .then((response)=>console.log(response));
  }


  render() {
    return (
      <div className="container">
        <h1>Hello React</h1>
      </div>
    );
  }

}

export default App;
