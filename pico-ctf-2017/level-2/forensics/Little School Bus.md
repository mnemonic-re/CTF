**Little School Bus**

> Little School Bus
> Can you help me find the data in this littleschoolbus.bmp?

>  HINTS
> Look at least significant bit encoding!!

Forensics and we stumble onto some kind of steganography. As the challenge says, there is probably something hidden in the
least significant bit.

If we open the file in Hex editor we see a lot of "FE", "FF", "FE"... That is hidden data.

First we need to use some tool to convert the .bmp (to remove headers properly) to RAW format. IrfanView for windows is a great tool.
When converting be sure in options - Flip image: Vertically and use BGR color encoding

Here is a script to read the raw: [Script](https://github.com/robbie-re/CTF/blob/CTF/pico-ctf-2017/level-2/forensics/data/raw.js "")

You cannot use java for this but you can:

> node raw.js

After that, rez.txt will appear and flag will be on the top.

flag: flag{remember_kids_protect_your_headers_7125}

