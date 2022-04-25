const express = require('express');
const app = express();

app.use(express.static('static'));

port = process.env.PORT;

app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream(process.env.STATIC + '/index.html').pipe(res)
})

app.listen(port, () => {
    console.log(`Site fedora 42 en ligne : http://localhost:${port}`);
})