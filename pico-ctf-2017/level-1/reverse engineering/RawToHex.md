
**Raw2Hex**

> Raw2Hex
> This program just prints a flag in raw form. All we need to do is convert the output to hex and we have it! 
> CLI yourself to /problems/963285fb64e4c5f7a31b5a601c704f99 and turn that Raw2Hex!


>  HINTS
> Google is always very helpful in these circumstances. In this case, you should be looking for an easy solution.

**Writeup**

Same as Hex2Raw but in reverse :)

So go to the directory. This time only 2 files, flag and raw2hex. Run ./raw2hex and you will get something like this:

> robbie84@shell-web:/problems/963285fb64e4c5f7a31b5a601c704f99$ ./raw2hex              
> The flag is:~Y?މB>robbie84@shell-web:/problems/963285fb64e4c5f7a31b5a601c704f99$

and some more "garbage". That is actually attempt to draw onto the terminal. It appears in some cases when there are more than 1 terminals running. Usually can be fixed by running the reset command on the terminals. Anyway, we can avoid it by passing it to xxd.

./raw2hex | xxd -p 

We get:

> The flag is:~Y?މB>robbie84@shell-web:/problems/963285fb64e4c5f7a31b5a601c704f99$ ./ra
> w2hex | xxd -p                                                                        
> 54686520666c61672069733ae519e7aa7e593fde891bd24aaa423ea4                              
> robbie84@shell-web:/problems/963285fb64e4c5f7a31b5a601c704f99$                        

Okay, so we got another hexadecimal stream. What to do with it? Python hex decode!

We get:

> "54686520666c61672069733ae519e7aa7e593fde891bd24aaa423ea4".decode("hex")
> 'The flag is:\xe5\x19\xe7\xaa~Y?\xde\x89\x1b\xd2J\xaaB>\xa4'

Hmm, lets check the ordinal with hex(ord(':')) 

> hex(ord(':'))
> '0x3a'

3a. Interesting. If we check the stream we decoded we notice 3a: 54686520666c6167206973 3a e519e7aa7e593fde891bd24aaa423ea4 so it seems to act like some kind of delimiter. So we remove the "a" from 3a and we get the flag:

flag = ae519e7aa7e593fde891bd24aaa423ea4

It is also possible to remove the entire 3a and get the following flag which is also correct. Experiment a bit :)

flag = e519e7aa7e593fde891bd24aaa423ea4

