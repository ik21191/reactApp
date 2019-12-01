import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HelloWorldFunction from './HelloWorldFunction';

//ReactDOM.render(<p>Hello world !</p>, document.getElementById('root'));

const myelement = (
  <table>
    <tr>
      <th>Name total {5 + 5}</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);


ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(myelement, document.getElementById('root'));
//ReactDOM.render(<HelloWorldFunction />, document.getElementById('root'));
