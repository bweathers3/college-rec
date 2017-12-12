import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/app/App';
//import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route } from 'react-router';

/*
const router = (
    <BrowserRouter>
      <Route path="/" component={ App }>
        <App />
      </Route>
    </BrowserRouter>
)


ReactDOM.render(
  router,
  document.getElementById('root')
);
*/

ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>
   , document.getElementById('root'));

registerServiceWorker();
