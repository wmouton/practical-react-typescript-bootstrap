import React from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  return (
    <React.Fragment>
      {/* <div className='heading-content'>
        <h2 className='text-primary'>ReactJS &bull; TypeScript &bull; Bootstrap</h2>
        <h5 className='rtb'>A demonstration of a practical use of ReactJS, TypeScript &amp; Bootstrap.</h5>
      </div> */}
        <i className='fa fa-code fa-5x heading-content' />
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col">

              <p className='h3 fw-bold text-success'>ReactJS &bull; TypeScript &bull; Bootstrap</p>
              <p className='fst-italic'>A demonstration of a practical use of ReactJS, TypeScript &amp; Bootstrap.</p>
              <button className='btn btn-success btn-sm'><i className='fa fa-book' /> Read More</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Customer rank={99} name={'Sephiroth'} title={'Destroyer'} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
