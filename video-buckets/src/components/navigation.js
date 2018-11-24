import React from 'react';

const Navigation = (props) => {
    const {
        buttonPressed,
        openVideoBucketEntryForm,
        createNewBucket,
        createNewVideo,
        handleUpdateVideoBucketInputs,
    } = props;

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
                buttonPressed === 1
                    && <Form
                        createNewVideo={ createNewVideo }
                        handleUpdateVideoBucketInputs={ handleUpdateVideoBucketInputs }
                    />
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
                            createNewBucket={ createNewBucket }
                            handleUpdateVideoBucketInputs={ handleUpdateVideoBucketInputs }
                        />
            }
        </header>
    )
};

const Form = (props) => {
    const {
        buttonPressed,
        createNewVideo,
        createNewBucket,
        handleUpdateVideoBucketInputs,
    } = props;

    return (
        <form onSubmit={ buttonPressed === 1 ? createNewVideo : createNewBucket }>
            <label> Name
                <input
                    type='text'
                    value='name'
                    name='name'
                    required
                    placeholder='Enter a new name'
                    onChange={ handleUpdateVideoBucketInputs }
                />
            </label>
            <label> Description
                <input
                    type='text'
                    value='description'
                    name='description'
                    placeholder='Enter a description'
                    onChange={ handleUpdateVideoBucketInputs }
                />
            </label>
            <input type='submit' value='Create' />
        </form>
    );
};

export default Navigation;