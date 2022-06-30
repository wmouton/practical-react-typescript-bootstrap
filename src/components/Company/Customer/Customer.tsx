import React from 'react';

interface CustomerProps {
  name: string;
  age: number;
  title: string;
}

const Customer: React.FC<CustomerProps> = ({ name, age, title }) => {
  
  return (
    <React.Fragment>
      <h2>Customer From Company X</h2>
      <ul>
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
      </ul>
    </React.Fragment>
  );
};

export default Customer;
