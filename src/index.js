import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import app from './components/app/app';
import home from './pages/home';

import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store';
import callback from './components/callback';
import studentAthletes from './components/studentathlete/studentAthletes';
import singleAthlete from './components/studentathlete/singleAthlete';
import addAthlete from './components/addstudentathlete/addAthlete';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ app }>
        <IndexRoute component={ home }></IndexRoute>
        <Route path="/callback" component={ callback } />
        <Route path="/studentAthletes" component={ studentAthletes } />
        <Route path="/addAthlete/new" component={ addAthlete } />
        <Route path="/singleAthlete/:id" component={ singleAthlete } />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
