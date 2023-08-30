const http = require('node:http')

let contador = 0;

const server = http.createServer((request, response) => {
    // sirve para solucionar el error de CORS
    response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	response.setHeader('Access-Control-Allow-Headers', '*');
	if ( request.method === 'OPTIONS' ) {
		response.writeHead(200);
		response.end();
		return;
	}
    // configuracion del servidor

    // pregunta cual es la ruta. Si ruta es igual a "/"
    if( request.url === '/') {
        response.end(`Contador: ${contador}`);

    // pregunta si la ruta es /incrementar
    } else if (request.url === '/incrementar') {
        contador++;
        response.end(`Contador: ${contador}`);

    // pregunta si la ruta es /disminuir
    } else if (request.url === '/disminuir') {
        contador--;
        response.end(`Contador: ${contador}`);
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Ruta no encontrada');
    }
})

server.listen(4000, () => {
    console.log('Servidor en el puerto 4000');
});
