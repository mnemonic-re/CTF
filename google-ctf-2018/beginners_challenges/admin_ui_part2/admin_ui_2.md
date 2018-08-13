**Challenge: Admin UI 2**

We continue the Admin UI challenge. Challenge description says we need to get the binary and find the password.

Since we already dumped the binary in part 1, we can start reversing it.

It is a 64bit ELF binary so we need to open it with 64bit IDA.

After opening the file we see a lot of familliar stuff from the web session. Lets move on and see if there is something we dont recognize
from the first part.

we see something possibly new at: 
> .text:0000000041414629 E8 18 FE FF FF                          call    _Z15secondary_loginv ; secondary_login(void)

Secondary login. Lets follow into the call. We can already see strings are different than the login we were offered before where
"Authorities have been informed" :)

On the first glance you can already see things like FLAG, FLAG, FLAG at loc_414144D6





If we decompile this function we get:

![gflag](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/admin_ui_part2/data/secondary_login.png)

After some fiddling around and trying some stuff because of XOR, I managed to find the bug. If you look at:

> .text:00000000414144D6 48 83 7D F0 23                          cmp     [rbp+l], 35<br/>
> .text:00000000414144DB 75 5A                                   jnz     short loc_41414537<br/>
> .text:00000000414144DD 48 8B 05 5C 05 00 00                    mov     rax, qword ptr cs:_ZL4FLAG ; FLAG<br/>
> .text:00000000414144E4 48 8B 15 5D 05 00 00                    mov     rdx, qword ptr cs:_ZL4FLAG+8 ; FLAG<br/>
> .text:00000000414144EB 48 89 85 70 FF FF FF                    mov     qword ptr [rbp+password], rax<br/>
> .text:00000000414144F2 48 89 95 78 FF FF FF                    mov     qword ptr [rbp+password+8], rdx<br/>

You can see that it is comparing the value in rbp+1 with 35 and if the value l == 35 then execute. This whole loop statement looks like
memory compare gone wrong. It is memcpy instead and it is assigning instead of comparing but we will still have to xor it properly.

Since it is assigment we follow the cs:_ZL4FLAG

We land at:

> .rodata:0000000041414A40 84 93 81 BC 93 B0 A8 98+_ZL4FLAG        db 84h, 93h, 81h, 0BCh, 93h, 0B0h, 0A8h, 98h, 97h, 0A6h

Open the Hex Dump window and just select all already highlited bytes. Should be like this:

> 84 93 81 BC 93 B0 A8 98  97 A6 B4 94 B0 A8 B5 83<br/>
> BD 98 85 A2 B3 B3 A2 B5  98 B3 AF F3 A9 98 F6 98<br/>
> AC F8 BA<br/>

Now, lets decode this hex with python and dexor it. But first we will remove the spaces. So we get

> 849381BC93B0A89897A6B494B0A8B583BD9885A2B3B3A2B598B3AFF3A998F698ACF8BA

You can download the python script from the /data/ folder. But here it is anyway:

```python
flag = "849381BC93B0A89897A6B494B0A8B583BD9885A2B3B3A2B598B3AFF3A998F698ACF8BA"

temp = bytearray(flag.decode('hex'))

output = ""
for chars in temp:
	output += chr(chars ^ 0xc7) # XOR key - IDA: 00000000414144BA 83 F0 C7	xor eax, 0FFFFFFC7h

print output
```

flag: CTF{Two_PasSworDz_Better_th4n_1_k?}

