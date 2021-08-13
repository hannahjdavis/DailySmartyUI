import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './SearchBar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo/>
          <SearchBar/>
        </div>
      </div>
    );
  }
}
