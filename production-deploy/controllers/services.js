'use strict'

function loadView(req, res){
    res.render('services', {currentHero: 'hero-services'});
}

module.exports = {
    loadView
};