
**Challenge: Floppy**

Things are getting interesting now. We are still at "level 2" but still :)

Once you download the attachment and extract it, you will see just a "foo.ico" file. Huh? Well, in CTFs there is always something.
Open the .ico file in your favorite Hex editor and check it out.
If you use any plugins for certain extensions it will help you a lot but even if you dont, this file is small so just scroll down a bit and you will see capital "PK".

When you see PK, it is like 99% some kind of zip archive. So for simplicity we will just cut out the first 765 bytes of data just before PK. So file starts with it. Like this:

> PK

Anything before that is cut out. After saving the file, rename it to foo.zip and try to extract it (7zip is most recommended). Voila.

We get "www.com" and "driver.txt" files. Interesting.

If you were around for some time you will know what .COM file is. If no, doesnt matter but still check out the wiki for it. 
Basically it was (still is...) a executable that ran under DOS and Windows 32bit. Later is just became obsolete and replaced with PE.

So we first read the text file and...

> This is the driver for the Aluminum-Key Hardware password storage device.<br/>
>      CTF{qeY80sU6Ktko8BJW}<br/>

> In case of emergency, run www.com<br/>

So, no need to run and debug www.com (yet ;)

