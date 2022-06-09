import React from 'react';
import './App.css';
import Visitor from './components/Visitor/Visitor';
import { VisitorClass } from './components/Visitor/VisitorClass';

function App() {
  return (
    <React.Fragment>
      <i className='fa fa-code fa-5x heading-content' />
      <div className='container'>
        <div className='grid'>
          <div className='row'>
            <div className='col'>
              <p className='h3 fw-bold text-success'>
                ReactJS &bull; TypeScript &bull; Bootstrap
              </p>
              <p className='fst-italic'>
                A practical use of ReactJS, TypeScript &amp;
                Bootstrap.
              </p>
              <button className='btn btn-success btn-sm'>
                <i className='fa fa-book' /> Read More
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Visitor rank={99} name={'Sephiroth'} title={'Destroyer'} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <VisitorClass rank={98} name={'Cloud'} title={'Liberator'} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
