import React from 'react';

interface EProps{
    name: string;
    age: number;
    title: string;
}
interface EState{
    name: string;
    age: number;
    title: string;
}

export class EmployeeClass extends React.Component<EProps, EState> {
    constructor(props:EProps) {
        const employeeObj = {name: 'Jack Renal', age: 25, title: 'Web Designer'}

        super(props);
        this.state = employeeObj as EState
    }

    render() {
        return (
            <>
            <h3>Employee Class</h3>
                <li className='list-group-item'>
                    Name: {this.state.name}
                </li>
                <li className='list-group-item'>
                    Age: {this.state.age}
                </li>
                <li className='list-group-item'>
                    Title: {this.state.title}
                </li>
            </>
        )
    }
}