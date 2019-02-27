import React, { Component } from 'react';
import Singleside from './Singleside';
import Error from './Error';
import axios from 'axios';

class Sidenews extends Component {
  state = {
    sidenews: [],
    error: false
  };
  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=043f8b340d904ebca0aac6b68a29a07f`;

    axios
      .get(url)
      .then(response => {
        this.setState({
          sidenews: response.data.articles
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }
  renderItems() {
    if (!this.state.error) {
      return this.state.sidenews.map(item => (
        <Singleside key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }
  render() {
    return (
      <div>
        <ul>{this.renderItems()}</ul>
      </div>
    );
  }
}

export default Sidenews;
