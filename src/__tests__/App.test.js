import React from 'react';
jest.mock('../getInitialData.js');
import App from '../App';
import { shallow } from 'enzyme';
import { staffInfo } from '../__mocks__/getInitialData';

describe('App', () => {

  it('should get data', async () => {
    console.log('hiiii')
    // const wrapper = await shallow(<App />)

    // expect(wrapper.length).toEqual(1)
    // expect(wrapper.state().staff).toEqual(staffInfo)
  })

})
