const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8080});

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('Received messagde => ${message}');
        ws.send('Hello! Message received.');

    });
    ws.send('Welcome to WebSocket server');
});