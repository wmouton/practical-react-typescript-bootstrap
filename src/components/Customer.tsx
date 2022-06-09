import React from 'react';

interface CustomerProps {
  rank: number;
  name: string;
  title: string;
}

const Customer: React.FC<CustomerProps> = ({ rank, name, title }) => {
  
  return (
    <React.Fragment>
      <h2>Customer</h2>
    </React.Fragment>
  );
};

export default Customer;
