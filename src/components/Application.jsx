import React, { Component } from 'react';
import Authentication from './Authentication';

import Posts from './Posts';

import { Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';

class Application extends Component {

  render() {
    return (
      <main className="Application">
        <Link to='/'><h1>Think Piece</h1></Link>
        <Authentication />
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </main>
    );
  }
}

export default Application;