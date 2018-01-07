import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import App from './components/app/App';
import Home from './pages/Home';

import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store';
import Callback from './components/Callback';
import StudentAthletes from './components/studentathlete/StudentAthletes';
import SingleAthlete from './components/studentathlete/SingleAthlete';
import AddAthlete from './components/addstudentathlete/AddAthlete';

const router = (
  <Provider store={ store }>

    <Router history={ history }>

      <Route path="/" component={ App }>
        <IndexRoute component={ Home }></IndexRoute>
        <Route path="/callback" component={ Callback } />
        <Route path="/studentAthletes" component={ StudentAthletes } />
        <Route path="/addAthlete/new" component={ AddAthlete } />
        <Route path="/singleAthlete/:id" component={ SingleAthlete } />
      </Route>

    </Router>

  </Provider>
)


ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
