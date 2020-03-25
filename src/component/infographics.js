import React, { Component } from 'react';
import '../App.css';
import myImage from '../images/covid19.jpeg'

export default class Infographics extends Component {
  render() {
  return (

  <div className="center-img">
   <img src={myImage} alt='covidImg' />
   </div>

  );}
}
