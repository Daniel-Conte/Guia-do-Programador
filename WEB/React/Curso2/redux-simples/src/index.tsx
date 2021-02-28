import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import configStore from './store/storeConfig'

const store = configStore()
  // A função do "Store" deve ser invocada

ReactDOM.render(

  // O componente "Provider" é quem faz a integração do React com Redux e deve envolver toda a aplicação, assim o "Store" criado pode ser acessado por qualquer componente de forma direta
  <Provider store={store}>
    {/* A propriedade "store" deve receber o "Store" criado, assim disponibilizando as funcionalidades do "Store" pra toda a aplicação */}

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
