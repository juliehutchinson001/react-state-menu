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
    // this.createNewBucket = this.createNewBucket.bind(this);
    // this.createNewVideo = this.createNewVideo.bind(this);
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

  createNewBucket(event) {
    event.preventDefault();
  }

  createNewVideo(event) {
    event.preventDefault();
  }

  handleUpdateVideoBucketInputs(event) {
    const updatedVideoBucketName = event.target.value;
    const updatedVideoBucketProperty = event.target.name;

    this.setState(oldState => {
      const newInputValues = Object.assign({}, oldState.input);
      newInputValues[updatedVideoBucketProperty] = updatedVideoBucketName;
      return { input: newInputValues };
    });
  }


  render() {
    return (
      <AppPresentation
        openVideoBucketEntryForm={ this.openVideoBucketEntryForm }
        buttonPressed={ this.state.button }
        createNewBucket={ event => this.createNewBucket(event) }
        createNewVideo={ event => this.createNewVideo(event) }
        handleUpdateVideoBucketInputs={ event => this.handleUpdateVideoBucketInputs(event) }
      />
    );
  }
}

const AppPresentation = (props) => {
  const {
    openVideoBucketEntryForm,
    buttonPressed,
    createNewBucket,
    createNewVideo,
    handleUpdateVideoBucketInputs,
  } = props;

  return (
    <div className="App">
      <Navigation
        openVideoBucketEntryForm={ openVideoBucketEntryForm }
        buttonPressed={ buttonPressed }
        createNewBucket={ createNewBucket }
        createNewVideo={ createNewVideo }
        handleUpdateVideoBucketInputs={ handleUpdateVideoBucketInputs }
      />
      <Buckets />
    </div>
  );
}

export default App;
