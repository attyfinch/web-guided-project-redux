import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

import { legacy_createStore } from "redux"
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';

const store = legacy_createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>  
, rootElement);
