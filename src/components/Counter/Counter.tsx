import React, { FC, useState } from 'react';

interface CState {
    count: number;
}

interface CProps { }

const Counter: FC<CProps> = () => {
    const [state, setState] = useState<CState>({
        count: 0
    });

    const inc = (): void => {
        setState({
            count: state.count + 1
        });
    }

    const decr = (): void => {
        setState({
            count: state.count - 1
        });
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <p className='h3 countVal display-3'>{state.count}</p>
                                <button className='btn btn-danger m-1' onClick={decr}>DECR</button>{' '}
                                <button className='btn btn-success m-1' onClick={inc}>INCR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter;