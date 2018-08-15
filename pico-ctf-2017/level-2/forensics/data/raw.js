const fs = require('fs');
const raw = fs.readFileSync('littleschoolbus.raw');
let rez = '';
let temp = '';
for(let i = 0 ; i < raw.length; i++)
{
	temp += ( raw[i] & 1 );
	if( temp.length === 8 )
	{
		rez += String.fromCharCode(parseInt(temp,2));
		temp = '';
	}
}
fs.writeFileSync("rez.txt",rez);
