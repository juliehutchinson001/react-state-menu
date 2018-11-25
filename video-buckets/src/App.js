import React, { Component } from 'react';
import './styles/css/main.css';
import Navigation from './components/navigation';
// import Buckets from './components/buckets';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formToCreate: '',
      input: {
        name: '',
        description: '',
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

    this.setState({ formToCreate: newEntryFormToBeOpened });
  }

  createBucket(event) {
    event.preventDefault();
  }

  createVideo(event) {
    event.preventDefault();

    this.setState(oldState => {
      const videoName = oldState.input.name;
      const videoDescription = oldState.input.description;
      const newVideoInformation = {};
      newVideoInformation.name = videoName;
      newVideoInformation.description = videoDescription;

      const newVideoEntry = [...oldState.buckets.general, newVideoInformation];

      return { buckets: { general: newVideoEntry } };
    });
  }

  handleUpdateVideoBucketInputs(event) {
    const newValue = event.target.value;
    const inputType = event.target.name;

    this.setState(oldState => {
      const newInputValues = Object.assign({}, oldState.input);
      newInputValues[inputType] = newValue;
      return { input: newInputValues };
    });
  }

  render() {
    const { formToCreate } = this.state;
    return (
      <AppPresentation
        openVideoBucketEntryForm={ this.openVideoBucketEntryForm }
        handleUpdateVideoBucketInputs={ event => this.handleUpdateVideoBucketInputs(event) }
        create={ formToCreate === 'video' ? this.createVideo : formToCreate === 'bucket' ? this.createBucket : '' }
      />
    );
  }
}

const AppPresentation = (props) => {
  const {
    openVideoBucketEntryForm,
    create,
    handleUpdateVideoBucketInputs,
  } = props;

  return (
    <div className="App">
      <Navigation
        openVideoBucketEntryForm={ openVideoBucketEntryForm }
        handleUpdateVideoBucketInputs={ handleUpdateVideoBucketInputs }
        create={ create }
      />
    </div>
  );
}

export default App;
