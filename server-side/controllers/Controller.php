<?php 

class Controller {

    public static function CreateView($viewName){
        require_once("./views/Header.php");
        require_once("./views/$viewName.php");
        require_once("./views/Footer.php");
    }
    
}

?>