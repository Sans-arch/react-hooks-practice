import { useState, useMemo } from 'react';

import './App.css'

function App() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');

  // useMemo = retorna o resultado de uma função passada como argumento, porém só executara ela caso um valor de deps mude
  const total = useMemo(() => {
    console.log('useMemo rodou');
    return (counter * 129389 * 1029301 * 10293012);
  }, [counter]);


  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{total}</h4>
      <button onClick={handlePlus}>+</button>

      <br /><br />
      <span>{name}</span><br />
      <input onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App
