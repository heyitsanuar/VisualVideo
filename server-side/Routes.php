<?php 

Route::set('inicio', function(){
    Inicio::CreateView();
});

Route::set('servicios', function(){
    Servicios::CreateView();
});

Route::set('galeria', function(){
    Galeria::CreateView();
});

Route::set('contactanos', function(){
    Contactanos::CreateView();
});

?>