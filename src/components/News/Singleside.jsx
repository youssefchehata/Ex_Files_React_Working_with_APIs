import React from 'react';

const Singleside = ({ item }) => (
  <div>
    <a href={item.url} target="_blank">
      <div className="divider" />
      <div className="section">
        <h5>{item.source.name}</h5>
        <p>{item.title}</p>
      </div>
    </a>
  </div>
);

export default Singleside;
