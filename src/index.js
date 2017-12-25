import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import App from './components/app/App';
import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Callback from './components/Callback';

const router = (
  <Provider store={ store }>

    <Router history={ history }>

      <Route path="/" component={ App }>
        <IndexRoute component={ Home }></IndexRoute>
      </Route>
      <Route path="/callback" component={Callback} />

    </Router>

  </Provider>
)


ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
