import Header from './modules/Header';
import RevealOnScroll from './modules/RevealOnScroll';
import Slider from './modules/Slider';
import Email from './modules/Email';
import $ from 'jquery';

var header = new Header();
var slider = new Slider();
var email = new Email();

new RevealOnScroll($('.image'), "100%");