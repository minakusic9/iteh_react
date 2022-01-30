import React from 'react';
import Celija from './Celija';

export default function Matrica({ podaci, onChange, readOnly, sufiks }) {

  return (
    <div style={{ position: 'relative' }}>
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
      <div style={{ position: 'absolute', right: '-40px', bottom: '-5px', fontSize: '12px', fontWeight: '600' }}>{sufiks}</div>
    </div>
  );
}
