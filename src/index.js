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
import singleProfile from './components/studentathlete/singleProfile';
import singleAthletic from './components/studentathlete/singleAthletic';
import singleAcademic from './components/studentathlete/singleAcademic';
import addAthlete from './components/addstudentathlete/addAthlete';
import addProfile from './components/addprofile/addProfile';
import addAcademic from './components/academic/addAcademic';
import addAthletic from './components/addathletic/addAthletic';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ app }>
        <IndexRoute component={ home }></IndexRoute>
        <Route path="/callback" component={ callback } />
        <Route path="/studentAthletes" component={ studentAthletes } />
        <Route path="/singleAthlete/:id" component={ singleAthlete } />
        <Route path="/singleProfile" component={ singleProfile } />
        <Route path="/singleAthletic" component={ singleAthletic } />
        <Route path="/singleAcademic" component={ singleAcademic } />
        <Route path="/addAthlete/new" component={ addAthlete } />
        <Route path="/addProfile/new" component={ addProfile } />
        <Route path="/addAcademic/new" component={ addAcademic } />
        <Route path="/addAthletic/new" component={ addAthletic } />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
