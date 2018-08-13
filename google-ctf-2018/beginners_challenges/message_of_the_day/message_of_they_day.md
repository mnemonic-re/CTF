**Challenge: Message of The Day**

Another PWN.

If we connect to the service we can see that we can set our own MOTD and display that MOTD but we cannot see Admins because we are not root!

If we open the binary in IDA and go to set_motd() function we can immediately see:

> .text:000000006060616E E8 BD A6 DF 9F                          call    _gets<br/>
> .text:0000000060606173 48 8D 85 00 FF FF FF                    lea     rax, [rbp+src]<br/>
> .text:000000006060617A BA 00 01 00 00                          mov     edx, 100h       ; n<br/>
> .text:000000006060617F 48 89 C6                                mov     rsi, rax        ; src<br/>
> .text:0000000060606182 48 8D 3D 57 0F 20 00                    lea     rdi, MOTD       ; dest<br/>

Again gets(). Buffer overlow and quite easy one. It has 256 bytes so we just need to overflow it with few bytes more to escape buffer garbage. This is pure smashing the stack to return into the read_flag() function and it will cat the flag for us.

Exploit: [Buffer Overlow](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/message_of_the_day/data/exploit.py "")

flag: CTF{m07d_1s_r3t_2_r34d_fl4g}


