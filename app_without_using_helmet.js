const express = require('express');
const helmet = require('helmet');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Server is Running");
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Serving on port ${PORT}`);
    }
});

/*  
    * My Response Headers Look like this:

    * Connection: keep-alive
    * Date: Wed, 28 Dec 2022 09:43:03 GMT
    * ETag: W/"11-rNcxsNWH1wwPyE8cPbDey/KRp9M"
    * Keep-Alive: timeout=5
    * X-Powered-By: Express 

*/