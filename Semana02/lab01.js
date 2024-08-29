const https = require('https');

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'GET'
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });
});

req.on('error', (error) => {
    console.error(`Error en la solicitud:  ${error.message}`);
});

req.end();