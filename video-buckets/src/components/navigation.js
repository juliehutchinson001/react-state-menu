import React from 'react';

const Navigation = ({ buttonPressed, openVideoBucketEntryForm }) => (
    <header>
        <button
            type='button'
            data-video={1}
            onClick={ openVideoBucketEntryForm(event, 'video') }
        >
            New Video
        </button>
        {
            buttonPressed === 1 && <Form />
        }
        <button
            type='button'
            data-bucket={2}
            onClick={ openVideoBucketEntryForm(event, 'bucket') }
        >
            New Bucket
        </button>
        {
            buttonPressed === 2 && <Form />
        }
    </header>
);



export default Navigation;