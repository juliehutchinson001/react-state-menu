import React from 'react';

const Navigation = (props) => {
    const {
        create,
        openVideoBucketEntryForm,
        handleUpdateVideoBucketInputs,
    } = props;

    return (
        <header>
            <button
                type='button'
                data-video='video'
                onClick={ event => openVideoBucketEntryForm(event, 'video') }
            >
                New Video
            </button>
            <button
                type='button'
                data-bucket='bucket'
                onClick={ event => openVideoBucketEntryForm(event, 'bucket') }
            >
                New Bucket
            </button>
            <Form
                create={ create }
                handleUpdateVideoBucketInputs={ handleUpdateVideoBucketInputs }
            />
        </header>
    )
};

const Form = (props) => {
    const {
        create,
        handleUpdateVideoBucketInputs,
    } = props;

    return (
        <form onSubmit={ create }>
            <label> Name
                <input
                    type='text'
                    name='name'
                    required
                    placeholder='Enter a new name'
                    onChange={ handleUpdateVideoBucketInputs }
                />
            </label>
            <label> Description
                <input
                    type='text'
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