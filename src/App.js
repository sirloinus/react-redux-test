import React from 'react';
import { createStore } from 'redux';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;


const defaultState = {
  greeting: 'hi',
  otherState: 'some stuff',
}

const greetingReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GREET_ME':
      return { ...state, greeting: 'hi amalie'};
    case 'GREET_WORLD':
      return { ...state, greeting: 'hello world'};
    default:
      return state;
  }
};

const store = createStore(greetingReducer);

store.dispatch({
  type: 'GREET_ME'
})

console.log(store.getState())
