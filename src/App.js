import React, { Component } from 'react';
import Loader from './Loader.js';
import './App.css';
import $ from 'jquery';
import StaffList from './StaffList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: []
    };
  }

  async componentDidMount() {
    const url = 'http://localhost:3001/api/frontend-staff';
    await this.getStaffInfo(url);
  }

  getStaffInfo = async url => {
    try {
      const response = await fetch(url);
      const staffMembers = await response.json();
      const staff = await this.populateMemberData(staffMembers.bio);
      this.setState({ staff });
    } catch (error) {
      console.log(error);
    }
  };

  populateMemberData = staffMembers => {
    const unresolvedPromises = staffMembers.map(async member => {
      const response = await fetch(member.info);
      const memberInfo = await response.json();
      return { ...memberInfo, name: member.name };
    });
    return Promise.all(unresolvedPromises);
  };

  // componentDidMount() {
  //   const url = 'http://localhost:3001/api/frontend-staff';
  //   this.getStaffInfo(url).then(staff =>
  //     this.setState({
  //       staff
  //     })
  //   );
  // }

  // getStaffInfo = url => {
  //   return fetch(url)
  //     .then(res => res.json())
  //     .then(staffMembers => this.populateMemberData(staffMembers.bio))
  //     .catch(error => console.log(error.message));
  // };

  // populateMemberData = staffMembers => {
  //   const pendingPromises = staffMembers.map(member => {
  //     return fetch(member.info)
  //       .then(res => res.json())
  //       .then(memberInfo => ({ ...memberInfo, name: member.name }));
  //   });
  //   return Promise.all(pendingPromises);
  // };

  render() {
    const { staff } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <Loader />
          <h2>Front-End Staff</h2>
        </div>
        <div className="App-intro">
          <div className="staff">
            {!staff.length ? <Loader /> : <StaffList staff={staff} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
