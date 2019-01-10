import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smothScroll from 'jquery-smooth-scroll';

class Header {
    constructor(){
        //Header assets
        this.header = $('#header');
        this.logo = $('#header-logo');
        this.logoContainer = $('#logo-container');
        this.nav = $('#header-nav');

        //Buttons
        this.btnOpen = $('#header-btn-open');
        this.btnClose = $('#header-btn-close');

        //Header waypoint
        this.headerMenu = $('#header-menu');
        this.headerWaypointTrigger = $('#landing-page');
        this.slider = $('.services__container');
        this.createHeaderWaypoints();

        //Smooth scrolling
        this.headerBtnScroll = $('#btn-scroll');
        this.btnUp = $('#btn-up');
        this.addSmothScrolling();

        console.log(this);
        this.events();
    }

    events(){
        this.btnOpen.click(this.toggleMenu.bind(this));
        this.btnClose.click(this.toggleMenu.bind(this));
    }
    
    //Adds or removes a class to enable/disable the menu
    toggleMenu(){
        this.nav.toggleClass('header__navigation--is-expanded');
    }

    //Creates waypoints for elements
    createHeaderWaypoints(){
        new Waypoint({
            element: this.headerWaypointTrigger[0],
            handler: this.changeHeaderAssets.bind(this),
            offset: '5%'
        });

        new Waypoint({
            element: this.slider[0],
            handler: this.toggleHeader.bind(this),
            offset: "-10%"
        });
    }

    //Changes asset classes when scrolling depending on direction
    changeHeaderAssets(direction){
        if(direction == 'down'){
            this.logo.attr('src', 'assets/img/logo/transparent-pink.png');
            this.logo.addClass('header__logo--expanded');
            this.headerMenu.addClass('header__menu--scrolled');
            this.logoContainer.addClass('header__logo--container');
            this.headerMenu.addClass('flex-center');
            this.nav.addClass('header__navigation--no-padding');
            this.btnOpen.addClass('header__btn-menu--black');
        }else{
            this.logo.attr('src', 'assets/img/logo/transparent-white.png');
            this.logo.removeClass('header__logo--expanded');
            this.headerMenu.removeClass('header__menu--scrolled');
            this.logoContainer.removeClass('header__logo--container');
            this.headerMenu.removeClass('flex-center');
            this.nav.removeClass('header__navigation--no-padding');
            this.btnOpen.removeClass('header__btn-menu--black');
        }
    }

    //Adds smooth scroll to certain elements
    addSmothScrolling(){
        this.headerBtnScroll.smoothScroll();
        this.btnUp.smoothScroll();
    }

    toggleHeader(){
        this.header.toggleClass('header--hide');
    }
}

export default Header;