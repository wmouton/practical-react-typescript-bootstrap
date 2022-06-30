import React from 'react';

interface CustomerClassState {
  name: string;
  age: number;
  title: string;
}
interface CustomerClassProps {
  name: string;
  age: number;
  title: string;
}

export class CustomerClass extends React.Component<
  CustomerClassState,
  CustomerClassState
> {
  // eslint-disable-next-line
  constructor(props: CustomerClassProps) {
    super(props);
  }

  render() {
    const { name, age, title } = this.props;
    return (
      <React.Fragment>
        <h3>Visitor Class Component</h3>
        <ul>
          <li className='list-group-item'>Name: {name}</li>
          <li className='list-group-item'>Age: {age}</li>
          <li className='list-group-item'>Title: {title}</li>
        </ul>
      </React.Fragment>
    );
  }
}
