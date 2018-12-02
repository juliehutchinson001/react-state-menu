//Libraries
import React from 'react';
import { shallow } from 'enzyme';

//Components
import App from '../App';
import Buckets, { ListOfBuckets } from '../components/buckets';

describe('general structure of the app', () => {
	it('renders App', () => {
		expect.assertions(1);
		const wrapper = shallow(<App />);
		expect(wrapper.find(".App").exists()).toEqual(true);

	});

	it('renders Bucket', () => {
		expect.assertions(1);
		const state = {
			general: {
				description: '',
				videos: []
			},
		};
		const wrapper = shallow(<Buckets buckets={state} />);
		expect(wrapper.find("ListOfBuckets").exists()).toEqual(true);
	});

	it('renders ListOfBuckets', () => {
		expect.assertions(1);
		const buckets = {
			general: {
				description: '',
				videos: []
			},
		};
		const wrapper = shallow(
			<ListOfBuckets
				buckets={ buckets }
				bucketName={ buckets['general'] }
				bucketArr={ Object.keys(buckets) }
				videos={ buckets['general'].videos }
				addVideoToBucket={ () => console.log(buckets) }
				deleteVideo={ () => console.log('delete') }
			/>
		);
		expect(wrapper.find("div").exists()).toEqual(true);
	});
});