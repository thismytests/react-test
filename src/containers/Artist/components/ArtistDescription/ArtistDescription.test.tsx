import React from 'react';
import ReactDOM from 'react-dom';
import ArtistDescription from './ArtistDescription';
import TestRenderer from 'react-test-renderer';

import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() })

test('the increment method increments count', () => {
  const div = document.createElement('div');

  const wrapper = TestRenderer.create(
    <ArtistDescription bandInformation={''} imageUrl={'umageUrls'}/>)
  // wrapper.find('button.counter-button').simulate('click')
  // wrapper.setState({count: 1})
  // wrapper.instance().increment()
  // / expect(wrapper.instance().state.count).toBe(1)
  console.log('wrapper.toJSON() ', wrapper.toJSON());
});
