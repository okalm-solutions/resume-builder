const pdf = require("html-pdf");
const path = require('path');

const pdfTemplate = require("../../../documents");

const options = {
	height: "62cm",
	width: "49.7cm",
	timeout: "6000",
};
function createResume(req, res){
    pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
        console.log(req.body)
        if (err) {
            console.log(err);
            res.send(Promise.reject());
        } else res.send(Promise.resolve());
    });
    return res.status(200).json('Resume Created');
}

function fetchResume(req, res){
    	const file = path.join(__dirname, '..', '..', '..', 'resume.pdf');
    	res.download(file);
}

module.exports = {
    createResume,
    fetchResume
}