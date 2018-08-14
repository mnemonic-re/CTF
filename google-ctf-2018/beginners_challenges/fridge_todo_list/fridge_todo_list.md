**Challenge: Fridge TODO List**

We are near the end!

Download the attachment and you will get a source code and a binary.

If we examine the source, we search for anything that has to do with todo user interaction and we can see a easy to spot bug in 
print_todo():

> void print_todo() {<br/>
>   printf("Which entry would you like to read? ");<br/>
>   fflush(stdout);<br/>
>   int idx = read_int(); // bug<br/>
>   if (idx > TODO_COUNT) // bug. We can put negative numbers<br/>
>   {<br/>
>     puts(OUT_OF_BOUNDS_MESSAGE);<br/>
>     return;<br/>
>   }<br/>
>   printf("Your TODO: %s\n", &todos[idx*TODO_LENGTH]);<br/>
> }<br/>

Now, lets see what is in the binary. If we go to the print_todo() function and follow the "todos" we end up in:

> .bss:0000000000203140                                         public todos

Cant do much here but above use is a Global offset table:

> .got.plt:0000000000203000 F8 2D 20 00 00 00 00 00 _GLOBAL_OFFSET_TABLE_ dq offset _DYNAMIC

Here we can do stuff but be aware that ASLR\PIE is enabled on the binary so we will have to leak the address.
Again in the source code we can see that idx is multiplied by LENGTH which is defined: #define TODO_LENGTH 48 so we can go only 48 bytes.

Adress of todos is 0000000000203140. Lets check the addresses we can jump. In python to get address in GOT:

> addr = 0x0203140<br/>
> hex(addr - 48)<br/>
> '0x203110' # write<br/>

Exploit: [Exploit](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/fridge_todo_list/data/exploit.py "")

After that just list the files in todos directory and you will see user "CountZero". You can then abort the connection, connect back and log into as that user and you will see the flag.

flag: CTF{goo.gl/cjHknW} 




