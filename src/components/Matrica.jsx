import React from 'react';
import Celija from './Celija';

export default function Matrica({ podaci, onChange, readOnly }) {

  return (
    <div>
      {
        podaci.map((red, i) => {
          return (
            <div className='red'>
              {
                red.map((celija, j) => {
                  if (readOnly || !onChange) {
                    return (
                      <Celija vrednost={celija} readOnly />
                    )
                  }
                  return (
                    <Celija vrednost={celija} onChange={onChange(i, j)} />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  );
}
