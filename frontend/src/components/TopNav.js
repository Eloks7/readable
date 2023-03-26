import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class TopNav extends Component {

  // handleUserChange = (value) => {
  //   this.props.dispatch(receiveUser(value))
  // }

  render() {

    return (
      <div className='nav-container'>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' exact activeclassname='active'>
                <img src='../logo.svg' alt='logo'></img>
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeclassname='active'>
                <button>Add Post</button>
              </NavLink>
            </li>
          </ul>
      </nav>
      </div>
    )
  }
}

export default TopNav;