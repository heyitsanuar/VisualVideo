import $ from 'jquery';

class Slider {

    constructor(){
        this.services = $('.services__item');
        this.btnBack = $('.btn__service--right');
        this.btnNext = $('.btn__service--left');
        this.mobileBack = $('.fa-chevron-left');
        this.mobileNext = $('.fa-chevron-right');

        this.events();
    }

    events(){
        this.btnNext.click(this.goForward);
        this.btnBack.click(this.goBack);
        this.mobileBack.click(this.goBack);
        this.mobileNext.click(this.goForward);
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