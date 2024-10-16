// scss
// import './style.scss';

// js
import './js/subscribe';
import './js/mobile-menu';
import { Slider as Slider } from './js/slider';

document.addEventListener('DOMContentLoaded', function(){
    new Slider({slider: '#mainslider'}).start();
});