import React from 'react';
import Matrica from './Matrica';

export default function Sabiranje() {

  return (
    <div className='container mt-2'>
      <h1 className='text-center'>Sabiranje matrica</h1>
      <div className='row mt-5'>
        <div className='col-3'>
          <Matrica podaci={[[1, 2], [1, 2], [4, 5]]} />
        </div>
        <div className='col-1 d-flex align-items-center justify-content-center display-4'>+</div>
        <div className='col-3'>
          <Matrica podaci={[[1, 2], [1, 2], [4, 5]]} />
        </div>
        <div className='col-1 d-flex align-items-center justify-content-center display-4'>=</div>
        <div className='col-3'>
          <Matrica readOnly podaci={[[1, 2], [1, 2], [4, 5]]} />
        </div>
      </div>
    </div>
  );
}
