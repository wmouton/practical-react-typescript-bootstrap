import React, {FC, useState} from 'react';

interface GreetState {
    message: string;
}
interface GreetProps {}

const Greetings:FC<GreetProps> = () => {
    const [state, setState] = useState<GreetState>({message: 'Hello...'});

    const changeMessage = (greet: string):void => setState({message: greet});

    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <h2 className='text-white'>{state.message}</h2>
                                <button className='btn btn-success' onClick={() => changeMessage('Good Morning!')}>Good Morning</button>{' '}
                                <button className='btn btn-warning' onClick={() => changeMessage('Good Afternoon!')}>Good Afternoon</button>{' '}
                                <button className='btn btn-danger' onClick={() => changeMessage('Good Evening!')}>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Greetings;