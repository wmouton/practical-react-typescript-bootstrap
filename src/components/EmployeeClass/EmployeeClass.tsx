import React from 'react';

interface EProps{}
interface EState{}

export class EmployeeClass extends React.Component<EProps, EState> {
    constructor(props:EProps) {
        super(props);
    }

    render() {
        return (
            <>
            <h3>Employee Class</h3>
            </>
        )
    }
}