import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
  <div className="App">
    <h1>My React and TypeScript App</h1>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
