import React from 'react';
import Video from './video';

const Buckets = ({ buckets, addVideoToBucket, deleteVideo }) => {
    const bucketsArray = Object.keys(buckets).map((bucketName, index, bucketArr) => (
            <ListOfBuckets
                key={ index }
                bucketName={ bucketName }
                videos={ buckets[bucketName].videos }
                addVideoToBucket={ addVideoToBucket }
                bucketArr={ bucketArr }
                deleteVideo={ deleteVideo }
            />
        )
    );

    return bucketsArray;
};

const ListOfBuckets = (props) => {

    const {
        bucketName,
        bucketArr,
        videos,
        addVideoToBucket,
        deleteVideo,
    } = props;

    const bucketsArray = videos.map((video, index) => (
        <Video
            key={ index }
            video={ video }
            currentLocation={ bucketName }
            addVideoToBucket={ addVideoToBucket }
            bucketArr={ bucketArr }
            deleteVideo={ deleteVideo }
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