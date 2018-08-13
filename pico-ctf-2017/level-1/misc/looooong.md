**looooong**

> looooong
> I heard you have some "delusions of grandeur" about your typing speed. How fast can you go at shell2017.picoctf.com:26409?

>  HINTS
> Use the nc command to connect!
> I hear python is a good means (among many) to generate the needed input.
> It might help to have multiple windows open

**Writeup**

Okay, we need to nc to the shell again and see what is asked of us. 

So: nc shell2017.picoctf.com 26409 gets us:

> To prove your skills, you must pass this test.
> Please give me the 'd' character '571' times, followed by a single '4'.
> To make things interesting, you have 30 seconds.
> Input:

And also every time you connect if you fail you get another random character, number of times and follwed by values.

There is a nifty trick in the bash prompt where you can craft your argument. So connect again but dont do any input. Open another
Terminal window and press "ALT+number" you will then get args input. So depending on what you are asked in your first window you will craft
the response appropriately with your additions. Then just quickly copy\paste it into the input of the Netcat and voila. 

Like so:

> robbie@zero:~# nc shell2017.picoctf.com 26409
> To prove your skills, you must pass this test.
> Please give me the 'f' character '738' times, followed by a single '5'.
>To make things interesting, you have 30 seconds.
Input:
fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5
You got it! You're super quick!
Flag: with_some_recognition_and_training_delusions_become_glimpses_7d7485288ece4edb059460b171dca22b
robbie@zero:~# 

So I connected with nc and timer then started. In another Terminal I pressed "ALT+7" and then just "38" because 7 is put inititally.
Then I just added "5" at the end and copied the output to the Netcat terminal and hit Enter. Voila!

flag: with_some_recognition_and_training_delusions_become_glimpses_7d7485288ece4edb059460b171dca22b

Your flag will be differnent because every connect is random.




