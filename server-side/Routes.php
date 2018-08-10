<?php 

Route::set('inicio', function(){
    Home::CreateView('Home');
});

Route::set('servicios', function(){
    Services::CreateView('Services');
});

Route::set('galeria', function(){
    Gallery::CreateView('Gallery');
});

Route::set('contactanos', function(){
    Contact::CreateView('Contact');
});

?>