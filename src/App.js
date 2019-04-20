import React, { Component } from 'react';
import Post from './components/post/index';

import './App.css';
import Header from './components/header/index';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
        <div>

        </div>
            <Post />
      </div>
    );
  }
}

export default App;
