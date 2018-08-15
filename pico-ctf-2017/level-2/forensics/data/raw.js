const fs = require('fs');
const raw = fs.readFileSync('littleschoolbus.raw');
let rez = '';
let tmp = '';
for(let i = 0 ; i < raw.length; i++)
{
	tmp += ( raw[i] & 1 );
	if( tmp.length === 8 )
	{
		rez += String.fromCharCode(parseInt(temp,2));
		tmp = '';
	}
}
fs.writeFileSync("rez.txt",rez);
