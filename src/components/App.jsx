import React, { Component } from 'react';
import News from './News/News';
import Sidenews from './News/Sidenews';

import './App.css';

class App extends Component {
  state = {
    news1: {
      type: 'top-headLines',
      query: 'country=us&language=en'
    },
    news2: {
      type: 'everything',
      query: 'domains=techcrunch.com&language=en'
    },
    news3: {
      type: 'everything',
      query: 'domains=wsj.com,nytimes.com&language=en'
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">
                My feed
              </a>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <Sidenews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
