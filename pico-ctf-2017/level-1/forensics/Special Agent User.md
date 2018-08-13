
**Special User Agent**

> Special User Agent

> We can get into the Administrator's computer with a browser exploit. But first, we need to figure out what browser they're using. 
> Perhaps this information is located in a network packet capture we took: data.pcap. 
> Enter the browser and version as "BrowserName BrowserVersion". 
> NOTE: We're just looking for up to 3 levels of subversions for the browser version 
> (ie. Version 1.2.3 for Version 1.2.3.4) and ignore any 0th subversions (ie. 1.2 for 1.2.0)

> HINTS
> Where can we find information on the browser in networking data? Maybe try reading up on user-agent strings.

**Writeup:**

We again a data.pcap file. As explained before .pcap files contain network information and are best analyzed using tools for
Network Traffic Analysis. We will use Network Miner again.

So, the challenge is asking us to find a Browser name and version but that version should have 3 subversions. Lets see. Open the file
in the Network Miner.

Lets check out the parameters again. It even might be in the Session because session stores a lot of information when you visit a website
but it looks like there is no information there. That is why it is important to research the tool and generally what CTF task is asking
you. 

In parameters we can see Parameter: "User Agent" (clever) with some browser information:

Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/4E423F

Only obvious choice here is: Chrome/34.0.1847.137 because of the subversions (no more than 3!). 
flag: Chrome 34.0.1847

NOTE: In never data.dmp, dump is different and User-Agent string will be: Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))

flag is: MSIE_9.0

