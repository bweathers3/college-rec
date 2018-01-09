import React from 'react';
import ReactDOM from 'react-dom';
import app from './components/app/app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<app />, div);
});
