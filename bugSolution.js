const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    // Simulate an error
    //const result = 10 / 0;
    res.send('Hello, world!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Something went wrong!');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});