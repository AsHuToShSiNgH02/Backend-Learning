const fs = require('fs');
let fileStream = fs.createReadStream(__dirname + "/index.txt");
let OutStream = process.stdout;

//readStream.pipe(writeStream);
fileStream.pipe(OutStream);