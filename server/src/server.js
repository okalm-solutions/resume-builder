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





// app.listen(PORT, () =>{
//     console.log(`Server started on port ${PORT}`)
// } );

// const express = require("express");
// const bodyParser = require("body-parser");
// const pdf = require("html-pdf");
// const cors = require("cors");

// const app = express();

// const pdfTemplate = require("../documents");

// const options = {
// 	height: "62cm",
// 	width: "49.7cm",
// 	timeout: "6000",
// };

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // POST route for PDF generation....
// app.post("/create-pdf", (req, res) => {
// 	pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
//         console.log(req.body)
// 		if (err) {
// 			console.log(err);
// 			res.send(Promise.reject());
// 		} else res.send(Promise.resolve());
// 	});
// });

// // GET route -> send generated PDF to client...
// app.get("/fetch-pdf", (req, res) => {
// 	const file = `${__dirname}/Resume.pdf`;
// 	res.download(file);
// });

// app.get('/', (req, res)=>{
//     res.json("Hello World!");
// })