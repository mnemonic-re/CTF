
**Hex2Raw**

> Hex2Raw
> This program requires some unprintable characters as input... But how do you print unprintable characters? 
> CLI yourself to /problems/bee57af2b16368039c96edaa1bd95826 and turn that Hex2Raw!


> HINTS
> Google for easy techniques of getting raw output to command line. In this case, you should be looking for an easy solution.

**Writeup**

Okay, we must use the WebShell here. SSH is possible but not needed for now. Enter the WebShell and go to /problems/bee57af2b16368039c96edaa1bd95826 directory. There are 3 files there: flag, hex2raw, input. Both flag and input cannot be read so we must use hex2raw as instructed.

If you run it: ./hex2raw you get something like this (you will get different code than me):

> robbie84@shell-web:/problems/bee57af2b16368039c96edaa1bd95826$ ./hex2raw              
> Give me this in raw form (0x41 -> 'A'):                                               
> 6a5c6fa9602a2d0f439953bcb6f4a611                                                      
                                                                                      
> You gave me:
> 

Then it waits for input. There is no point in trying to manually do this. There are two ways you can do it. The almighty Python or the alighty xxd. Lets try both.

If we look at the hint it points that 0x41 is capital A. a is not 0x41, it is 0x61. You can check HEX\ASCII table here:
https://www.rapidtables.com/convert/number/ascii-to-hex.html

So we know we have to input the same hexadecimal sequence to get the raw. So we need to give it the hex code, decode it and pipe it into hex2raw to get the input

**Python**

python -c "print('6a5c6fa9602a2d0f439953bcb6f4a611'.decode('hex'))" | ./hex2raw

> You gave me:                                                                          
> 6a5c6fa9602a2d0f439953bcb6f4a611                                                      
> Yay! That's what I wanted! Here be the flag:                                          
> d2ee728e47348dffdd9b654d3733a40a

**xxd**

echo 6a5c6fa9602a2d0f439953bcb6f4a611 | xxd -p -r | ./hex2raw

> You gave me:                                                                          
> 6a5c6fa9602a2d0f439953bcb6f4a611                                                      
> Yay! That's what I wanted! Here be the flag:                                          
> d2ee728e47348dffdd9b654d3733a40a

flag: d2ee728e47348dffdd9b654d3733a40a

Remember that your code will be different when passing it to hex2raw. So run it atleast once to see your code!

