<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Visual Videography</title>
    <link rel="icon" href="assets/img/logo/favicon.ico" type="image/x-icon"/>
    <link rel="shortcut icon" href="assets/img/logo/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Asap+Condensed:400,600" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/normalize-68bb445695.css"/>
    
    <link rel="stylesheet" href="assets/css/styles-89ae474360.css"/>

    <script src="assets/js/App-2b51ed65a0.js"></script>
    
</head>
<body>
    <header id="header" class="header">
        <div id="header-menu" class="header__menu">
            <div id="logo-container" class="header__logo">
                <a href="#">
                    <img id="header-logo" src="assets/img/logo/transparent-white.png" alt="" style="height: 52px;">
                </a>
                <i id="header-btn-open" class="header__btn-menu header__btn-menu--open fas fa-bars"></i>
            </div>
            <div id="header-nav" class="header__navigation">
                <nav>
                    <i id="header-btn-close" class="header__btn-menu header__btn-menu--close fas fa-times"></i>
                    <a href="/inicio" class="header__links">INICIO</a>
                    <a href="/servicios" class="header__links">SERVICIOS</a>
                    <a href="/nuestros-trabajos" class="header__links">GALERIA</a>
                    <a href="/contactanos" class="header__links">CONTACTO</a>
                </nav>
            </div>
        </div>
        <picture>
            <source srcset="assets/img/heroes/home/hero-hq.jpg" media="(min-width: 992px)">
            <source srcset="assets/img/heroes/home/hero-mq.jpg" media="(min-width: 768px)">
            <img srcset="assets/img/heroes/home/hero-lq.jpg" alt="" class="image">
        </picture>
        <div class="header__info">
            <h1 class="header__title">COBERTURA DE TUS EVENTOS</h1>
            <p class="header__subtitle">
                Disfruta en compañia de tus seres queridos
                grandes eventos mientras son grabados,
                con planes que se adecuan a tus posibilidades.
            </p>
            <a id="btn-scroll" href="#landing-page" class="header__btn-scroll fas fa-arrow-circle-down mt-5"></a>
        </div>
        <a id="btn-up" href="#header" class="btn__up fas fa-arrow-circle-up"></a>
    </header>