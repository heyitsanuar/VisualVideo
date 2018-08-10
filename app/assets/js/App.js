import Header from './modules/Header';
import RevealOnScroll from './modules/RevealOnScroll';
import Slider from './modules/Slider';
import $ from 'jquery';

var header = new Header();
var slider = new Slider();

new RevealOnScroll($('.image'), "100%");