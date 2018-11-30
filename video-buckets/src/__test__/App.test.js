//Libraries
import React from 'react';
import { shallow } from 'enzyme';

//Components
import App from '../App';

describe('general structure of the app', () => {
  it('renders without crashing', () => {
    expect.assertions(1);
    const wrapper = shallow(<App />).dive();
    expect(wrapper.find('div').text())
      .toBe("<Navigation /><Buckets />");
  });
});