**Challenge: Floppy2**

Well, we are ahead a bit! And now we tackle our first reverse engineering challenge. It is weird it is put into "Misc" category so it
is possible there is some other solution but miss out on a chance to reverse a .COM file? NO WAY!

As I stated in [Floppy](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/floppy/floppy.md "Floppy") 
challenge writeup, .COM files are old DOS files that can still be ran on 32bit windows. So if you have a 32bit VM, you can debug it 
fine. If not, you will need to use a DOS emulator like DosBox.

I will use the DosBox debugger. Be aware, you must download the DosBox debugger seperately and put it into the DosBox installation folder
for it to work properly. It is just a extension to DosBox. 

If we just run the .com file in CMD we get a message:

> The Foobanizer9000 is no longer on the OffHub DMZ.

So run the DosBox debugger and in your directory where you extracted .com file type:

> debug www.com

That will start a new debugger session for the process. Now we need to look for some clues. It isnt easy getting around so use this:
https://www.vogons.org/viewtopic.php?t=3944 - Debugger manual

So, since program isnt asking us anything for input, we need to look for some clues. Lets single step forward and see if there are any
loops. It is a small program so even if you miss it, just restart.

First loop is at 01FE:0128 and we can see that it runs 11 times. You can use "d segment addr" to see the dump of that memory segment. 
Interesting. Not that long lets just go, F10. We are quickly through the loop and nothing is shown in the dump but further down at 
01FE:120F we can see XOR [di], bp on the stack segment and loop again. Again 11 times. Lets do another dump set

> d SS:014E

And lets go through. And you can see !CTF{g00 in the dump! It must be the loop that generates the flag. Lets finish it. F10!

Flag is now fully formed and is showing CTF{g00do1dDOS-FTW}

![gflag](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/floppy2/data/dosbox.png)


