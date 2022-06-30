import React, {FC, useState} from 'react';

interface EProps {}
interface EState {
    name: string;
    age: number;
    title: string;
}

const Employee: FC<EProps> = () => {

    const initialState = {name: 'James Samson', age: 22, title: 'Web Developer'}
    const [employee] = useState<EState>(initialState);
    return (
        <>
        <h3>Company Employee</h3>
            <ul className='list-group'>
                <li className='list-group-item'>
                    Name: {employee.name}
                </li>
                <li className='list-group-item'>
                    Age: {employee.age}
                </li>
                <li className='list-group-item'>
                    Title: {employee.title}
                </li>
            </ul>
        </>
    )
}

export default Employee;