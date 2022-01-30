import React from 'react';

export default function Celija({ vrednost, onChange, readOnly }) {
  return (
    <div className='celija'>
      {
        readOnly ? (
          <span>{vrednost}</span>
        ) : (
          <input type="text" className='form-control basic' value={vrednost} onChange={e => {

            const value = Number(e.target.value);
            if (isNaN(value)) {
              return;
            }
            onChange(value);
          }} />
        )
      }
    </div>
  );
}
