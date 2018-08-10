<?php 

class Route {

    public statid $validRoutes = array();

    public static function set($route, $function) {
        self::$validRoutes[] = $route;
    }
}

?>