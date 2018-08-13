**Challenge: Filter ENV**

We get a attachment and a server to connect to. Attachment is a .c source code. Lets examine it.

First we see a lot of LD_XXXX. Lets skip that for a moment and look at the code.

When I scrolled down one of few things that caught my attention is a lot of NULLs everywhere. But since this is something to do with
enviroment, lets see what we can find about env or enviro...

Interesting things happen in the set_new_env function:

>   if (clearenv() != 0)<br/>
>     err(1, "clearenv");<br/>
> <br/>
>   environ = env;<br/>
>   filter_env();<br/>
> }<br/>

It is assigning env to environ which is a GLOBAL variable. If we follow filter_env() we can see:

>  for (p = unsafe; *p != NULL; p++) {<br/>
>    if (getenv(*p) != NULL) {<br/>
>     if (setenv(*p, "", 1) != 0)<br/>
>	err(1, "setenv");<br/>

But, != NULL? Where is that NULL. The environ = env should have been NULL terminated. 
If we look at this loop it is iterating ONCE through unsafe variables, then calls getenv with name as parameter and sets them to 
empty string. Since it runs only once and getenv() returns one result and setenv() also, it is working with a first variable with
the name. Here system is using the last variable so if we pass some LD_ twice (LD_PRELOAD for example) and give our own shared object,
it is possible to get code execution.

It doesnt matter what LD_ is set, we can run our own. We will run a LD_PRELOAD to specify a dynamic library to replace a function.
So we need to find something that can cat the flag.

We can ltrace to see what functions /usr/bin/id calls so we can preload. On the top we have a nice candidate:

> strrchr("/usr/bin/id", '/')                      = "/id"

If we connect to the server we are presented with a shell so we need to find a way to upload our custom library to the server. There is
not much options but as I said in some other writeup, there is always something, in this case zcat and base64.
If we do a pwd on the server we see we are in root. We can navigate to home and ls again and we see adminimum user and in that directory
we have flag and filterenv binary. So we need to cat the flag.

So now lets create and prepare our custom library. 

> gcc -shared object.c -o object.so<br/>
> gzip object.so<br/>
> base64 object.so.gz > objbase<br/>

Since we need to send it to the server we will use echo. Open the b64dump in vim and add echo before all lines so it looks like this:

> echo 'H4sICLMicFsAA29iamVjdC5zbwDtW21sHEcZfvf8kXNin52SD5ME5ahq1amUtZsqiUvk5Bx/bcB2' >> /tmp/object.so.gz<br/>
> echo .... for each line<br/>

Now we need to add some commands so it all executes for us after we upload the file:

> cd /tmp<br/>
> base64 -d object.so.gz > dump.so.gz<br/>
> gunzip dump*<br/>
> cd /home/adminimum/<br/>
> ./filterenv<br/>
> LD_PRELOAD=/tmp/dump.so<br/>
> LD_PRELOAD=/tmp/dump.so<br/>
> LD_PRELOAD=/tmp/dump.so<br/>
> LD_PRELOAD=/tmp/dump.so<br/>

Now connect to the server and just paste and it should execute the payload. It can fail or you can overflow it so add LD_PRELOAD
1by1 until you get it right. Payload: [Object Payload](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/filter_env/data/objbase "") and [Source](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/filter_env/data/object.c "")


flag: CTF{H3ll0-Kingc0p3}

