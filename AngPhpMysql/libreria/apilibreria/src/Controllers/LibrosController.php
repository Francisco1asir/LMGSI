<?php
    namespace App\Controllers;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use App\Controllers\BaseController;
    use App\Model\LibrosModel;    

    class LibrosController {
        public function new($request, $response, $args){
            $response->getBody()->write("Insertar un nuevo Libro");
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
        public function getAll($request, $response, $args){
            $response->getBody()->write("Listado de Libros");
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
    }