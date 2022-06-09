import React from 'react';

interface VisClassState {
  rank: number;
  name: string;
  title: string;
}
interface VisClassProps {
  rank: number;
  name: string;
  title: string;
}

export class VisitorClass extends React.Component<
  VisClassProps,
  VisClassState
> {
  constructor(props: VisClassProps) {
    super(props);
  }

  render() {
    const { rank, name, title } = this.props;
    return (
      <React.Fragment>
        <h3>Visitor Class Component</h3>
        <ul>
          <li className='list-group-item'>Rank: {rank}</li>
          <li className='list-group-item'>Name: {name}</li>
          <li className='list-group-item'>Title: {title}</li>
        </ul>
      </React.Fragment>
    );
  }
}
