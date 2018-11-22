import React from 'react';

const Navigation = ({ buttonPressed, openVideoBucketEntryForm, createNewBucket }) => {
    return (
        <header>
            <button
                type='button'
                data-video={ 1 }
                onClick={ openVideoBucketEntryForm(event, 'video') }
            >
                New Video
            </button>
            {
                buttonPressed === 1 && <Form />
            }
            <button
                type='button'
                data-bucket={ 2 }
                onClick={ openVideoBucketEntryForm(event, 'bucket') }
            >
                New Bucket
            </button>
            {
                buttonPressed === 2
                && <Form
                    createNewBucket={ createNewBucket } />
            }
        </header>
    )
};

const Form = ({ buttonPressed, createNewVideo, createNewBucket }) => (
    <form onSubmit={ buttonPressed === 1 ? createNewVideo : createNewBucket }>
        <label> Name
            <input
                type='text'
                required
                placeholder='Enter a new name'
                onChange={ }
            />
        </label>
        <label> Description
            <input
                type='text'
                placeholder='Enter a description'
                onChange={ }
            />
        </label>
        <input type='submit' value='Create' />
    </form>
);

export default Navigation;