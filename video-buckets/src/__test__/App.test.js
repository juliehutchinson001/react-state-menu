import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('general structure of the app', () => {
  beforeAll(() => {
    /* Runs before all tests */
  })
  afterAll(() => {
    /* Runs after all tests */
  })
  beforeEach(() => {
    /* Runs before each test */
  })
  afterEach(() => {
    /* Runs after each test */
  })

  it('renders without crashing', () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toBe('<Navigation /><Buckets />');
  });
});