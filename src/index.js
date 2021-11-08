import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Slider from './Components/Slider';
import { SlideArray } from './Components/SlideArray';

ReactDOM.render(
    <Slider slides={SlideArray} timeToRefresh={5} />, 
  document.getElementById('root')
);
