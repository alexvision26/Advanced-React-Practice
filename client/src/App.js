import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/footballers').then(res => {
      console.log('footballers', res.data);
      this.setState({ players: res.data })
    }).catch(error => {
      console.log('this is an error', error)
    })
  }

    render() {
      return (
    <div className="App">
      <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>
    </div>
  );
    }
}

export default App;
