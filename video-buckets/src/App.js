import React, { Component } from 'react';
import './styles/css/main.css';
import Navigation from './components/navigation';
import Buckets from './components/buckets';

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
        general: {},
      },
    };

    this.openVideoBucketEntryForm = this.openVideoBucketEntryForm.bind(this);
    this.createBucket = this.createBucket.bind(this);
    this.createVideo = this.createVideo.bind(this);
    this.createForm = this.createForm.bind(this);
    this.addVideoToBucket = this.addVideoToBucket.bind(this);
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

  createBucket(event) {  /* {  test: { description: '', videos: [{name, description}] } } */
    event.preventDefault();

    this.setState(oldState => {
      const bucketName = oldState.input.name;
      const bucketDescription = oldState.input.description;
      const newBucketInformation = {};

      newBucketInformation[bucketName] = {};
      newBucketInformation[bucketName].description = bucketDescription;
      newBucketInformation[bucketName].videos = [];

      const updatedBucketList = Object.assign({}, oldState.buckets, newBucketInformation);

      return {
        buckets: updatedBucketList,
        formToCreate: ''
      };
    })
  }

  createVideo(event) {
    event.preventDefault();
    this.setState(oldState => {
      const videoName = oldState.input.name;
      const videoDescription = oldState.input.description;
      const newVideoInformation = {}; /* {  test: { description: '', videos: [{name, description}] } } */
      newVideoInformation.name = videoName;
      newVideoInformation.description = videoDescription;

      const newVideoEntry = [...oldState.buckets.general.videos, newVideoInformation];
      return {
        buckets: { general: { description: '', videos: newVideoEntry} },
        formToCreate: ''
      };
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

  createForm(event) {
    const { formToCreate } = this.state;

    if (formToCreate === 'video') {
      this.createVideo(event)
    } else if (formToCreate === 'bucket') {
      this.createBucket(event)
    }
  }

  addVideoToBucket(videoToInsert, newLocation, currentLocation) { /* {  test: { description: '', videos: [{name, description}] } } */
    this.setState(oldState => {
      const newBucketList = {};
      // Remove video from current bucket
      const currentBucket = oldState.buckets[currentLocation]; // {name, description}
      newBucketList[currentLocation] = currentBucket.videos.filter(video => video.name !== videoToInsert);
      newBucketList[newLocation] = [...oldState.buckets[newLocation].videos, videoToInsert];

      const newState = Object.assign({}, oldState.buckets, newBucketList);

      return {
          buckets: newState
      };
  });
}

  render() {
    return (
      <AppPresentation
        openVideoBucketEntryForm={ this.openVideoBucketEntryForm }
        handleUpdateVideoBucketInputs={ event => this.handleUpdateVideoBucketInputs(event) }
        formToCreate={ this.state.formToCreate }
        create={ this.createForm }
        buckets={ this.state.buckets } /* {  test: { description: '', videos: [name, description] } } */
        addVideoToBucket={ this.addVideoToBucket }
      />
    );
  }
}

const AppPresentation = (props) => {
  const {
    openVideoBucketEntryForm,
    create,
    handleUpdateVideoBucketInputs,
    formToCreate,
    addVideoToBucket,
    buckets,
  } = props;

  return (
    <div className="App">
      <Navigation
        openVideoBucketEntryForm={ openVideoBucketEntryForm }
        handleUpdateVideoBucketInputs={ handleUpdateVideoBucketInputs }
        formToCreate={ formToCreate }
        create={ create }
      />
      <Buckets
        buckets={ buckets } /* {  test: { description: '', videos: [] } } */
        addVideoToBucket={ addVideoToBucket }
      />
    </div>
  );
}

export default App;
