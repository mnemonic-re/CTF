**Programmers Assemble**

> Programmers Assemble<br/>
> You found a text file with some really low level code. Some value at the beginning has been X'ed out. <br/>
> Can you figure out what should be there, to make main return the value 0x1? <br/>
> Submit the answer as a hexidecimal number, with no extraneous 0s. <br/>
> For example, the decimal number 2015 would be submitted as 0x7df, not 0x000007df<br/>

>  HINTS
> All of the commands can be found here along with what they do.<br/>
> It may be useful to be able to run the code, with test values.<br/>

**Writeup**

So, we get a small assembly.s file. And we need to figure out what is in the XXXXXXXX.  At the first glance it is AT syntax. 
I hate it so I just translated it to [Intel syntax](https://github.com/robbie-re/CTF/blob/CTF/pico-ctf-2017/level-2/reverse%20engineering/data/assembly_intel.asm "")

If we look at the code in loop:

> loop:<br/>
>     test eax, eax # eax to 0<br/>
>     jz fin # if zero jump to fin<br/>
>     add ebx, ecx # if not add value from ecx to ebx<br/>
>     dec eax # dec eax<br/>

It is just some multiplication so lets divide. Open python interactive and:

> 0x97c9 / 0x7<br/>
> 5551<br/>
> hex(0x97c9 / 0x7)<br/>
> '0x15af'<br/>

Missing value is 0x15af.

flag: 0x15af

