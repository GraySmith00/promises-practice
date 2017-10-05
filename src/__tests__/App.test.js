import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';

describe('App', () => {

  it('should get data', () => {
    jest.mock('../__mocks__/getInitialData.js')

    const wrapper = mount(<App />)

    expect(wrapper.length).toEqual(1)
  })

})
