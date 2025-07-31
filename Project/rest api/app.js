const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const start = async () => {
  try {
    app.listen(PORT , () => { `${PORT} Yes Connected` });
    console.log('Server is running on port 3000');
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

start();