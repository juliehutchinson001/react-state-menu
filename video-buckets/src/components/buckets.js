import React from 'react';
import Video from './video';

const Buckets = ({ buckets, addVideoToBucket }) => { /* {  test: { description: '', videos: [name, description] } } */
    const bucketsArray = Object.keys(buckets).map((bucketName, index, bucketArr) => (
            <ListOfBuckets
                key={ index }
                bucketName={ bucketName }
                videos={ buckets[bucketName].videos } /* buckets: {  test: { description: '', videos: [name, description] } } */
                addVideoToBucket={ addVideoToBucket }
                bucketArr={ bucketArr } /* [general, test] */
            />
        )
    );

    return bucketsArray;
};

const ListOfBuckets = (props) => {

    const {
        bucketName, /* buckets: {  test: { description: '', videos: [{name, description}, {}] } } */
        bucketArr, /* [general, test] */
        videos,
        addVideoToBucket,
    } = props;

    const bucketsArray = videos.map((video, index) => (
        <Video
            key={ index }
            video={ video } /* buckets: {  general: {}, test: { description: '', videos: [{name, description}, {}] } } */
            currentLocation={ bucketName }
            addVideoToBucket={ addVideoToBucket }
            bucketArr={ bucketArr } /* [general, test] */
        />
    ));

    return (
        <div className="bucket-list__container" >
            <h1 className="bucket-list__header">{ bucketName !== 'general' ? bucketName : '' }</h1>
            <ul className="bucket-list--body">
                { bucketsArray }
            </ul>
        </div>
    );
};

export default Buckets;