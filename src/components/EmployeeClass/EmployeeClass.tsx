import React from 'react';

interface EProps{}
interface EState{
    name: string;
    age: number;
    title: string;
}

export class EmployeeClass extends React.Component<EProps, EState> {
    constructor(props:EProps) {
        super(props);
        let employeeObj = {name: 'Jack Renal', age: 25, title: 'Web Designer'};
        this.state = employeeObj as EState
    }

    render() {
        const {name, age, title} = this.state;
        return (
            <>
            <h3>Employee Class</h3>
                <li className='list-group-item'>
                    Name: {name}
                </li>
                <li className='list-group-item'>
                    Age: {age}
                </li>
                <li className='list-group-item'>
                    Title: {title}
                </li>
            </>
        )
    }
}