import React from 'react';

interface VisitorProps {
  rank: number;
  name: string;
  title: string;
}

const Visitor: React.FC<VisitorProps> = ({ rank, name, title }) => {
  
  return (
    <React.Fragment>
      <h2>Visitors From Another Realm</h2>
      <ul>
          <li className="list-group-item">Rank: {rank}</li>
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Title: {title}</li>
      </ul>
    </React.Fragment>
  );
};

export default Visitor;
