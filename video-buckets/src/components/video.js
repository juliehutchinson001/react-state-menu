import React from 'react';

const Video = props => {

    const {
        video,
        currentLocation,
        addVideoToBucket,
        bucketArr,
        deleteVideo,
    } = props;

    const bucketList = bucketArr.map(
        (eachBucket, bucketId) => (
            <option
                key={ bucketId }
                value={ eachBucket }
            >
                { eachBucket }
            </option>
        )
    );

    return (
        <li className='options-video'>
            <span >{ video.name }</span>
            <button
                type='button'
                data-del={ video.name }
                onClick={ event => deleteVideo(event, currentLocation) }
            >
                Delete
            </button>
            <select
                className='options__container'
                onChange={ event => addVideoToBucket(video, event.target.value, currentLocation) }
                value={ currentLocation }
            >
                { bucketList }
            </select>
        </li>
    );
}

export default Video;
