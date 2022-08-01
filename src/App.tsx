import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
// import Employee from './components/Company/Employee/Employee';
// import { EmployeeClass } from "./components/EmployeeClass/EmployeeClass";
// import Customer from './components/Company/Customer/Customer';
// import { CustomerClass } from './components/Company/CustomerClass/CustomerClass';

const App = () => {
  return (
    <React.Fragment>
      <i className='fa fa-code fa-5x heading-content' />
      <div className='container'>
        <div className='grid'>
          <div className='row'>
            <div className='col'>

              <p className='h3 fw-bold text-primary'>
                ReactJS &bull; TypeScript &bull; Bootstrap
              </p>
              <p className='fst-italic text-primary'>
                A practical use of ReactJS, TypeScript &amp;
                Bootstrap.
              </p>
              <button className='btn btn-success btn-sm'>
                <i className='fa fa-book' /> Read More
              </button>
            </div>
          </div>
          <br/>

          <div className='row'>
            <div className='col'>
              <Counter />
            </div>
          </div>

          {/*<div className='row'>
            <div className='col'>
              <Customer name={'John Doe'} age={23} title={'CEO'} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CustomerClass name={'Sam Smith'} age={32} title={'CTO'} />
            </div>
          </div>*/}

          {/*<div className='row'>
            <div className='col text-success'>
              <Employee />
            </div>
          </div>
          <div className='row'>
            <div className='col text-success'>
              <EmployeeClass />
            </div>
          </div>*/}

        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
