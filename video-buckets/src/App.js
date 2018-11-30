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
        general: {
          description: '',
          videos: []
        },
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

  createBucket(event) {
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
      const newVideoInformation = {};

      newVideoInformation.name = videoName;
      newVideoInformation.description = videoDescription;

      const newVideoEntry = [...oldState.buckets.general.videos, newVideoInformation];
      const generalBucket = { general: { description: '', videos: newVideoEntry} };
      const buckets = Object.assign({}, oldState.buckets, generalBucket);

      return {
        buckets,
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

//                 {name, descrp}, name:'buck', name: 'general'
  addVideoToBucket(videoToInsert, newLocation, currentLocation) {
    this.setState(oldState => {
      const newBucketList = {};
      const currentBucket = oldState.buckets[currentLocation];
      const newBucketLoc = oldState.buckets[newLocation];

      newBucketList[currentLocation] = {description: ''};
      newBucketList[newLocation] = {};
      newBucketList[newLocation].description = newBucketLoc.description;
      newBucketList[currentLocation].videos = currentBucket.videos.filter(video => video.name !== videoToInsert.name);
      newBucketList[newLocation].videos = [...oldState.buckets[newLocation].videos, videoToInsert];

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
        buckets={ this.state.buckets }
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
        buckets={ buckets }
        addVideoToBucket={ addVideoToBucket }
      />
    </div>
  );
}

export default App;
