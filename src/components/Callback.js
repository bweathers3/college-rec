import { Component } from 'react';
import { setIdToken, setAccessToken } from './../utils/Authservice';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/";
  }

  render() {
    return null;
  }
}

export default Callback;
