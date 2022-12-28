const express = require('express');
const helmet = require('helmet');

const app = express();

const PORT = 3000;

app.use(helmet());

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
    * Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
    * Content-Length: 17
    * Content-Type: text/html; charset=utf-8
    * Cross-Origin-Embedder-Policy: require-corp
    * Cross-Origin-Opener-Policy: same-origin
    * Cross-Origin-Resource-Policy: same-origin
    * Date: Wed, 28 Dec 2022 09:51:50 GMT
    * ETag: W/"11-rNcxsNWH1wwPyE8cPbDey/KRp9M"
    * Keep-Alive: timeout=5
    * Origin-Agent-Cluster: ?1
    * Referrer-Policy: no-referrer
    * Strict-Transport-Security: max-age=15552000; includeSubDomains
    * X-Content-Type-Options: nosniff
    * X-DNS-Prefetch-Control: off
    * X-Download-Options: noopen
    * X-Frame-Options: SAMEORIGIN
    * X-Permitted-Cross-Domain-Policies: none
    * X-XSS-Protection: 0

*/