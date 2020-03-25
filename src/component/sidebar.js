import React, { Component } from 'react';
import '../App.css';

export default class Sidebar extends Component {
  render() {
  return (

  <div id="mySidenav" className ="side-tab ">
  <p>
  Important Links <br /><br />
    <a href="https://www.covid19india.org/" className="App-link">Covid-19 India Tracker</a><br /><br />
    <a href="https://self4society.mygov.in/volunteer/" className="App-link">Volunteer Registration</a><br /><br />
    <a href="https://karunadu.karnataka.gov.in/hfw/kannada/Pages/distwise-home-quarantive.aspx" className="App-link"> Quarantined People List</a><br />
    (Karnataka)<br /><br />
    <a href="https://google.org/crisisresponse/covid19-map" className="App-link">Covid-19 Map</a><br /><br />
  </p>
  </div>

  );}
}
