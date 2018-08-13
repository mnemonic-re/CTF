
**Digital Camouflage**

> Digital Camouflage

> We need to gain access to some routers. Let's try and see if we can find the password in the captured network data: data.pcap.

> HINTS
> It looks like someone logged in with their password earlier. Where would log in data be located in a network capture?
> If you think you found the flag, but it doesn't work, consider that the data may be encrypted.

**Writeup**

We get a data.pcap file. The .pcap files contain network information and are best analyzed using Wireshark, Microsoft Network Analyzer,
old Ethereal and bunch of other tools like Network Miner.

If you are looking something specific, "strings" from SysInternals or simillar tools might find the information you are looking for but
it is usually best to use the tools and learn.

For this challenge we will use simple tool - Network Miner - https://www.netresec.com/index.ashx?page=NetworkMiner

Load the .pcap file into the tool and lets see what can we find. We are looking for a password of a user for a router!

Check out the tool a bit, but since username or password is a passed parameter, Check parameters tab. You can immediately see:

userid mathewsr
pswrd aHJLUVNTTFd2Rw==

That password is looking odd. But if you ever did any cryptography you will immediately assume it is probably BASE64.

So, using a simple google search for Base64 decode (https://www.base64decode.org/) you can decode the password.

Password (and flag) is: hrKQSSLWvG


