**Challenge: Admin UI 3**

Another continuation of the Admin UI challenge. 

We still have the binary so we should explore it further. After we go beyond secondary login, we can see the function:

> .text:000000004141454C E8 3D FD FF FF                          call    _Z12command_linev ; command_line(void)

Lets follow that function. Upon landing we immediately see:

> .text:00000000414142B2 E8 83 FF FF FF                          call    _Z5getsxPc      ; getsx(char *)

gets used? Buffer Overflow. It doesnt have to be but... Also we see some familliar code that was presented to us when we connected
via netcat: 

> .text:0000000041414305 48 8D 3D 74 07 00 00                    lea     rdi, aVersion03 ; "Version 0.3"

Still looking around, we can see a function:

If we connect to the mngmnt-iface.ctfcompetition.com 1337 like in Admin UI part 1 challenge and choose option 2 to login, we can feed
it that flags we got from Part1 and Part2. We will get "Autheticated" message and a small prompt. Not much options so we need to find
something so we can get the flag.

There is several interesting functions that are basically if\else if statements. We will focus on debug_shell and shell_enabled statement.

> .text:0000000041414349 E8 D9 FE FF FF                          call    _Z11debug_shellv ; debug_shell(void)

If we follow that we can see /bin/sh is executed here. Well thanks. Ok, we have some ideas now, lets see how we could exploit this.

There is also a function named ZL13shell_enabled ; shell_enabled which is located in the .bss segment. If we look in the disassembly:

> .text:000000004141432A 0F B6 05 07 1E 20 00   movzx   eax, cs:_ZL13shell_enabled ; shell_enabled<br/>
> .text:0000000041414331 83 F0 01               xor     eax, 1<br/>
> .text:0000000041414334 84 C0                  test    al, al<br/>
> .text:0000000041414336 74 11                  jz      short loc_41414349<br/>

So basically ZL13shell_enabled in .bss must be equal to 1 for our exploit to work. Take note of .bss:0000000041616138 address.

Looking at the code around further down the disassembly in loc_41414353 we can see "echo" and strncmp with buffer. 
It is a short fuction and if we decompile it can see we have a format string vulnerability. So our goal is to "run over" the "ifs" and
"elseifs" and land at the shell.

The binary has non-executable stack so we cannot just overrun it like a madman. Need to be a bit surgical. Also, pwntools are useful
here because we need networking. So we have 2 choices. Do a normal buffer overflow or a format string. Lets do BOTH! 

For Buffer Overflow, there is no ASLR so we can target it.
We need to send 56 or 0x38 in hex letters (usually it is A (hex 0x41) and addres from IDA and application will return to debug_shell function and we have a shell.

Exploit: [Buffer Overflow Exploit](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/admin_ui_part3/data/buffer_overflow_exploit.py "Admin UI 3 Buffer Overflow")

And the result:

![gflag](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/admin_ui_part3/data/buffer_overflow_exploit.png)


For Format String, we just need to use the address from .bss we took note earlier and overwrite the return address. Then we just type
shell in the prompt and we are in. Then just cat the flag.

Exploit: [Format String Exploit](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/admin_ui_part3/data/format_string_exploit.py "Admin UI 3 Format String")

Result:

![gflag](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/admin_ui_part3/data/format_string_exploit.png)

flag: CTF{c0d3ExEc?W411_pL4y3d}

