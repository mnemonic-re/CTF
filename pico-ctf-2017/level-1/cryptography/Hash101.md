**Hash101**

> Hash101
> Prove your knowledge of hashes and claim a flag as your prize! Connect to the service at shell2017.picoctf.com:19170
> UPDATED 16:12 EST 1 Apr.

>  HINTS
> All concepts required to complete this challenge, including simple modular math, are quickly found by googling :)

**Writeup**

This tests knowledge about hashes. There are 4 levels. So again, connect to the server and lets go!

nc shell2017.picoctf.com 19170

I removed full level descriptions because they are large and you can always re-read them yourself.


> **Level 1**

> -------- LEVEL 1: Text = just 1's and 0's --------
> All text can be represented by numbers. To see how different letters translate to numbers, go to http://www.asciitable.com/

> TO UNLOCK NEXT LEVEL, give me the ASCII representation of 0110010101100001011100100111010001101000

Very simple. Use https://www.rapidtables.com/convert/number/ and get the string

0110010101100001011100100111010001101000 = earth


**Level 2**

> ------ LEVEL 2: Numbers can be base ANYTHING -----
> TO UNLOCK NEXT LEVEL, give me the text you just decoded, earth, as its hex equivalent, and then the decimal equivalent of that hex
> number ("foo" -> 666f6f -> 6713199)

Useful: https://www.rapidtables.com/convert/number/ for conversions

We first enter the hex of the "earth" string and then decimal of that hex.

hex>6561727468                    
Good job! 6561727468 to ASCII -> earth is earth
Now decimal
dec>435426587752
Good job! 435426587752 to Hex -> 6561727468 to ASCII -> earth is earth
Correct! Completed level 2


**Level 3**

> ----------- LEVEL 3: Hashing Function ------------
> TO UNLOCK NEXT LEVEL, give me a string that will result in a 4 after being transformed with the mentioned example hashing function

We just give it 4 letters...

AAAA
Correct! Completed level 3


**Level 4**
 
> --------------- LEVEL 4: Real Hash ---------------
> TO CLAIM YOUR PRIZE, give me the string password that will result in this MD5 hash (MD5, like most hashes, are represented as hex digits):
> edc1785161d271a14ad13098300e1431

Using https://www.md5online.org/ and feeding it the hash we get the string which we enter into the prompt to get the flag.

0rr1s
Correct! Completed level 4
You completed all 4 levels! Here is your prize: 1b16e0e724dc0a8b96d127a6af8ed9a7



flag: 1b16e0e724dc0a8b96d127a6af8ed9a7



