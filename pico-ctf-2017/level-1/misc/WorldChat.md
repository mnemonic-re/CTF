**WorldChat**

> WorldChat
> We think someone is trying to transmit a flag over WorldChat. 
> Unfortunately, there are so many other people talking that we can't really keep track of what is going on! 
> Go see if you can find the messenger at shell2017.picoctf.com:14747. 
> Remember to use Ctrl-C to cut the connection if it overwhelms you!


> HINTS
> There are cool command line tools that can filter out lines with specific keywords in them. 
> Check out 'grep'! You can use the '|' character to put all the output into another process or command (like the grep process)

**Writeup**

This is a really interesting challenge!

First just connect and see what is going on in the WORLD CHAT :)

nc shell2017.picoctf.com 14747

Crazy chat! But we are looking for the messenger who is trying to transmit the flag. It is impossible to find it in all that chat but
luckily we can pull out information from the chat that are interest to us. 
If you want help with Netcat go here - https://www.poftut.com/netcat-nc-command-tutorial-examples/ or any other good NC documentation.

First we need to locate the messenger person in the World Chat. We can try to grep him or save the chat data to local file so we can see
what is he saying. Lets try to dump the chat.

nc -v shell2017.picoctf.com 14747 > /tmp/worldchat

Now we wait a while until chat goes through. After a minute or so, open worldchat in text editor and see what is going on. Searching
for messenger does not work but if you search for flag you will find a "flagperson". That must be our messanger! And he is giving us
the flag in 8 segments. So find them all. It should look like this:

> 14:30:52 flagperson: this is part 1/8 of the flag - ab4b<br/>
> 14:30:55 flagperson: this is part 2/8 of the flag - 181f<br/>
> 14:30:58 flagperson: this is part 3/8 of the flag - 3bc9<br/>
> 14:30:58 flagperson: this is part 4/8 of the flag - 2758<br/>
> 14:31:00 flagperson: this is part 5/8 of the flag - 9e0d<br/>
> 14:31:01 flagperson: this is part 6/8 of the flag - 79a4<br/>
> 14:31:04 flagperson: this is part 7/8 of the flag - 845a<br/>
> 14:31:05 flagperson: this is part 8/8 of the flag - 3ace<br/>

So now we combine the parts and get: ab4b181f3bc927589e0d79a4845a3ace

flag: ab4b181f3bc927589e0d79a4845a3ace






