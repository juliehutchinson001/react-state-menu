import React from 'react';

const Video = props => {

    const {
        video, /* buckets: {  general: {}, test: { description: '', videos: [{name, description}, {}] } } */
        currentLocation,
        addVideoToBucket,
        bucketArr, /* [general, test] */
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
            <select
                className='options__container'
                onChange={ event => addVideoToBucket(video.name, event.target.value, currentLocation) }
                value={ currentLocation }
            >
                { bucketList }
            </select>
        </li>
    );
}

export default Video;
