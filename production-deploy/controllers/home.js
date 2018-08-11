'use strict'

function loadView(req, res){
    res.render('home', {currentHero: 'hero-main'});
}

function redirect(req, res){
    res.redirect('/');
}

module.exports = {
    loadView,
    redirect
};