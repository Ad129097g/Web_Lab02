const http = require('http');

const servidor = http.createServer((req, res) =>{
    console.log(req);
    console.log(req.url);
    console.log(req.method);

    console.log(res.statusCode);

    res.end('Creando servidor')
})

const port = 3000;

servidor.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto`, port
    );
});