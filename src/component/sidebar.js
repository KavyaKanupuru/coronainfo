import React, { Component } from 'react';
import '../App.css';

export default class Sidebar extends Component {
  render() {
  return (
      <div className="side-tab">
          <a
            className="App-link"
            href="https://google.org/crisisresponse/covid19-map"
            target="_blank"
            rel="noopener noreferrer"
            >
                   covid19-map
           </a>
       </div>
  );}
}
