import React, { FC } from 'react';

interface GreetState {}
interface GreetProps {}

const Greetings:FC<GreetProps> = () => {
    return (
        <>
            <h3>Greetings</h3>
        </>
    )
}

export default Greetings;