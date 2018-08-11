'use strict'

function loadView(req, res){
    res.render('contact', {currentHero: 'hero-contact'});
}

module.exports = {
    loadView
};