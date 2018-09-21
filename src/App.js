import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <Header />
        </header>

        <article>
          <Content />
        </article>
      </div>
    );
  }
}

export default App;
