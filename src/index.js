import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
//import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import App from './components/app/App';
import Home from './pages/Home';

import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store';
import Callback from './components/Callback';
import StudentAthletes from './components/studentathlete/StudentAthletes';
import AddAthlete from './components/addstudentathlete/AddAthlete';

const router = (
  <Provider store={ store }>

    <Router history={ history }>

      <Route path="/" component={ App }>
        <IndexRoute component={ Home }></IndexRoute>
        <Route path="/callback" component={ Callback } />
        <Route path="/studentAthletes/new" component={ StudentAthletes } />
      </Route>
      
    </Router>

  </Provider>
)


ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
