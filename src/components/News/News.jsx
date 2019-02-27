import React, { Component } from 'react';

import NewSingle from './NewSingle';
class News extends Component {
  state = {
    news: []
  };
  componentDidMount() {
    const url =`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=043f8b340d904ebca0aac6b68a29a07f`;
     
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          news: data.articles
        });
      })
      .catch(error => console.log(error));
  }
  renderItems() {
    return this.state.news.map(item => (
      <NewSingle key={item.url} item={item} />
    ));
  }
  render() {
    
    return <div className="row">
    <ul>{this.renderItems()}</ul>;
    </div>
    
  }
}

export default News;
