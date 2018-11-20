import React, { Component } from 'react';
import './styles/css/main.css';
import Navigation from './components/navigation';
import Buckets from './components/buckets';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: '',
        value: '',
        type: ''
      },
      buckets: {
        general: [],
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Buckets />
      </div>
    );
  }
}

export default App;
