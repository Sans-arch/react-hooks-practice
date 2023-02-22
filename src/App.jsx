// useCallback = serve para memorização de funções
import { useState, useCallback } from 'react';

import './App.css'

const fnCounter = new Set();

// o método render() em functional components é a própria função, ou seja, é como se a função App()
//  fosse redeclarada a cada render
function App() {
  const [counter, setCounter] = useState(0);

  // Com [], criamos a instância 1 unica vez, então teremos somente 1 unica vez esta função criada na aplicação.
  // Usamos useCallback quando precisamos passar uma função para um componente filho!
  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={handlePlus} />
    </div>
  );
}

function Button(props) {
  return (
      <button onClick={props.onClick}>+</button>
  );
}

export default App
