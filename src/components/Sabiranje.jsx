import React, { useEffect, useState } from 'react';
import DimenzijaInput from './DimenzijaInput';
import Matrica from './Matrica';

export default function Sabiranje() {
  const [brojRedova, setBrojRedova] = useState(1);
  const [brojKolona, setBrojKolona] = useState(1);
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
    setDrugaMatrica(new Array(brojRedova).fill(new Array(brojKolona).fill(0)))
  }, [brojKolona, brojRedova])

  const izracunajMatricu = () => {
    const novaMatrica = new Array(brojRedova);

    for (let i = 0; i < brojRedova; i++) {
      novaMatrica[i] = new Array(brojKolona).fill(0);
      for (let j = 0; j < brojKolona; j++) {
        novaMatrica[i][j] = prvaMatrica[i][j] + drugaMatrica[i][j];
      }
    }
    setRes(novaMatrica)
  }
  return (
    <div className='container mt-2'>
      <h1 className='text-center'>Sabiranje matrica</h1>
      <div className='mt-2 d-flex justify-content-center'>
        <DimenzijaInput value={brojRedova} onChange={setBrojRedova} label='M' />
        <DimenzijaInput value={brojKolona} onChange={setBrojKolona} label='N' />
      </div>
      <div className='row mt-5'>
        <div className='col-3  d-flex align-items-center justify-content-center display-4'>
          <Matrica podaci={prvaMatrica} onChange={updateMatrica(setPrvaMatrica)} />
        </div>
        <div className='col-1 d-flex align-items-center justify-content-center display-4'>+</div>
        <div className='col-3  d-flex align-items-center justify-content-center display-4'>
          <Matrica podaci={drugaMatrica} onChange={updateMatrica(setDrugaMatrica)} />
        </div>
        <div className='col-1 d-flex align-items-center justify-content-center display-4'>
          <button onClick={izracunajMatricu} className='btn'>=</button>
        </div>
        {
          res && (
            <div className='col-3 d-flex align-items-center justify-content-center display-4'>
              <Matrica readOnly podaci={res} />
            </div>
          )
        }
      </div>
    </div>
  );
}
