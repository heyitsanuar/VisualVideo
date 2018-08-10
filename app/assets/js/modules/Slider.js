import $ from 'jquery';

class Slider {

    constructor(){
        this.services = $('.services__item');
        this.btnBack = $('.btn__service--right');
        this.btnNext = $('.btn__service--left');

        this.events();
    }

    events(){
        this.btnNext.click(this.goForward);
        this.btnBack.click(this.goBack);
    }

    goForward(){
        $(this).parents('.services__item').addClass('slider--hide');
        $(this).parents('.services__item').next().removeClass('slider--hide');
    }

    goBack(){
        $(this).parents('.services__item').addClass('slider--hide');
        $(this).parents('.services__item').prev().removeClass('slider--hide');
    }

}

export default Slider;