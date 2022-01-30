import React from 'react';

export default function DimenzijaInput({ value, label, onChange }) {
  return (
    <div className='d-flex justify-content-center align-items-center mr-3'>
      <label className='mr-4 pt-2' >{label}</label>
      <input type="number" className='form-control' value={value} onChange={e => {
        const v = Number(e.target.value);
        if (isNaN(v) || v < 1) {
          return;
        }
        onChange(v);
      }} />
    </div>
  );
}
