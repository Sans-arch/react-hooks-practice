import { useReducer } from 'react';

import './App.css'

// useReducer = é uma forma de manipular 1 ou mais estados ao mesmo tempo à partir do disparo de eventos.

// reducer = ouve as alterações e faz a alteração no estado
function reducer(state, action) {
  switch(action.type) {
    case 'plus':
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      }
    case 'minus':
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      }
    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handlePlus() {
    // dispatch() sempre vai executar a função reducer, a função reducer sempre precisa retornar alguma coisa
    // porque o retorno da função reducer vai ser o meu state atualizado
    dispatch({ type: 'plus' }); // dispara a alteração
  }

  function handleMinus() {
    dispatch({ type: 'minus' }); // dispara a alteração
  }

  return (
    <div>
      <h1>{state.counter}</h1>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default App
