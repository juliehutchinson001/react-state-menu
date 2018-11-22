import React, { Component } from 'react';
import './styles/css/main.css';
import Navigation from './components/navigation';
import Buckets from './components/buckets';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: null,
      input: {
        name: '',
        description: '',
        type: ''
      },
      buckets: {
        general: [],
      },
    };

    this.openVideoBucketEntryForm = this.openVideoBucketEntryForm.bind(this);
  }

  openVideoBucketEntryForm(event, typeOfEntry) {
    const videoBucketFormId = event.target.dataset;

    const newEntryFormToBeOpened = (
      typeOfEntry === 'video'
      ? videoBucketFormId.video
      : videoBucketFormId.bucket
    );

    this.setState({ button: newEntryFormToBeOpened });
  }

  render() {
    return (
      <div className="App">
        <Navigation
          openVideoBucketEntryForm={ this.openVideoBucketEntryForm }
          buttonPressed={ this.state.button }
        />
        <Buckets />
      </div>
    );
  }
}

export default App;
