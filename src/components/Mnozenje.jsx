import React, { useEffect, useState } from 'react';
import DimenzijaInput from './DimenzijaInput';
import Matrica from './Matrica';

export default function Mnozenje() {
  const [brojRedova, setBrojRedova] = useState(1);
  const [brojKolona, setBrojKolona] = useState(1);
  const [brojKolonaDruga, setBrojKolonaDruga] = useState(1);
  const [prvaMatrica, setPrvaMatrica] = useState([[0]]);
  const [drugaMatrica, setDrugaMatrica] = useState([[0]]);
  const [res, setRes] = useState(undefined);
  const updateMatrica = setMatrica => (i, j) => value => {
    setMatrica(prev => {
      let novaMatrica = [...prev];
      let noviRed = [...prev[i]];
      noviRed[j] = value;
      novaMatrica[i] = noviRed;
      return novaMatrica;
    })
  }
  useEffect(() => {
    setPrvaMatrica(new Array(brojRedova).fill(new Array(brojKolona).fill(0)));
    setDrugaMatrica(new Array(brojKolona).fill(new Array(brojKolonaDruga).fill(0)))
  }, [brojKolona, brojRedova, brojKolonaDruga])
  const izracunajMatricu = () => {
    const novaMatrica = new Array(brojRedova);

    for (let i = 0; i < brojRedova; i++) {
      novaMatrica[i] = new Array(brojKolonaDruga).fill(0);
      for (let j = 0; j < brojKolonaDruga; j++) {
        for (let k = 0; k < brojKolona; k++) {
          novaMatrica[i][j] = novaMatrica[i][j] + prvaMatrica[i][k] * drugaMatrica[k][j];
        }
      }
    }
    setRes(novaMatrica)
  }
  return (
    <div>
      <h1 className='text-center'>Mnozenje matrica</h1>
      <div className='mt-2 d-flex justify-content-center'>
        <DimenzijaInput value={brojRedova} onChange={setBrojRedova} label='L' />
        <DimenzijaInput value={brojKolona} onChange={setBrojKolona} label='M' />
        <DimenzijaInput value={brojKolonaDruga} onChange={setBrojKolonaDruga} label='N' />
      </div>
      <div className='row mt-5'>
        <div className='col-3  d-flex align-items-center justify-content-center display-4'>
          <Matrica sufiks='L x M' podaci={prvaMatrica} onChange={updateMatrica(setPrvaMatrica)} />
        </div>
        <div className='col-1 d-flex align-items-center justify-content-center display-4'>*</div>
        <div className='col-3  d-flex align-items-center justify-content-center display-4'>
          <Matrica sufiks='M x N' podaci={drugaMatrica} onChange={updateMatrica(setDrugaMatrica)} />
        </div>
        <div className='col-1 d-flex align-items-center justify-content-center display-4'>
          <button onClick={izracunajMatricu} className='btn'>=</button>
        </div>
        {
          res && (
            <div className='col-3 d-flex align-items-center justify-content-center display-4'>
              <Matrica sufiks='L x N' readOnly podaci={res} />
            </div>
          )
        }
      </div>
    </div>
  );
}
