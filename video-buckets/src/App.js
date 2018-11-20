import React, { Component } from 'react';
import './styles/css/main.css';
import Navigation from './components/navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: '',
        value: '',
        type: ''
      },
      bucket: {
        general: [],
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
