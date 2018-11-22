const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'THIS IS THE BACKEND' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening to the smooth sounds of port ${port}`));