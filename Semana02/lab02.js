const http = require('http');

const servidor = http.createServer((req, res) =>{
    res.end('Creando servidor')
})

const port = 3000;

servidor.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto`, port
    );
});