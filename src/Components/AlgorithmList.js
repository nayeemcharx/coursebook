import React from 'react';
const AlgorithmList = ({ items }) => {
    
    return (
      <div className="algorithm-list">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link}>Run simulation</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AlgorithmList;