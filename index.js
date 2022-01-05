const { exec } = require("child_process");

var http = require('http'); // 1 - Import Node.js core module
var start = 'C:\\Users\\david\\Downloads\\liquidctl\\liquidctl'
var server = http.createServer(function (req, res) {   // 2 - creating server
	var com = start + req.url.split('/').join(' ').split('%22').join('"').split(';').join('').split('\\').join('')
	console.log(com)
	res.write(com + '\rn');
	exec(com, (error, stdout, stderr) => {
    	if (error) {
        	res.write(`error: ${error.message}`);
		res.end();
        	return;
    	}
    	if (stderr) {
        	res.write(`stderr: ${stderr}`);
		res.end(); 
        	return;
    	}
    	res.write(`stdout: ${stdout}`);
	res.end();
	});
});        

server.listen(5000);
