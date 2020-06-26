const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Tweeter😎'
    });


});

app.post('/tweets', (req, res) =>{
    console.log('req.body');
    
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
  });
