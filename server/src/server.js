const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

function startServer(){
    server.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`)
    });
}

startServer();