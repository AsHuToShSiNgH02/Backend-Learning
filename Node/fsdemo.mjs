import {readFile} from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url); 
const data = await readFile(filePath, {encoding: 'utf8'});
console.log(data);

