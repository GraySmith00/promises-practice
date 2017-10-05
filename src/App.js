import React, { Component } from 'react';
import Loader from './Loader.js';
import './App.css';
import $ from 'jquery';
import StaffList from './StaffList.js';
import { getInitialData } from './getInitialData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: []
    };
  }

  componentDidMount() {
    getInitialData('http://localhost:3001/api/frontend-staff')
    .then(finalArray => this.setState({ staff: finalArray }))
  }

  // getData(url) {
  //   return fetch(url)
  //   .then(res => res.json())
  //   .then(data => data.bio)
  //   .then(initArray => {
  //
  //     const promiseArray = initArray.map(person => {
  //       return fetch(person.info)
  //       .then(res => res.json())
  //     })
  //
  //     return Promise.all(promiseArray)
  //     .then(data => {
  //       return data.map((member, i) => {
  //         return Object.assign({}, member, { name: initArray[i].name })
  //       })
  //     })
  //   })
  // }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Loader />
          <h2>Front-End Staff</h2>
        </div>
        <div className="App-intro">
          <div className='staff'>
            {
              this.state.staff.length === 0 ?
              <Loader /> :
              <StaffList array={this.state.staff} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
