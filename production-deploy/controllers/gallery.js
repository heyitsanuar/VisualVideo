'use strict'

function loadView(req, res){
    res.render('gallery', {currentHero: 'hero-gallery'});
}

module.exports = {
    loadView
};  