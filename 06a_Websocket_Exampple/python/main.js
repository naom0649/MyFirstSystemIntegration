const ws = new WebSocket('ws://localhost:8765');

ws.onopen = () => {
  console.log('Connected to server');
  ws.send('Hello server');
};

ws.onmessage = (event) => {
  console.log(`Server says: ${event.data}`);
};
