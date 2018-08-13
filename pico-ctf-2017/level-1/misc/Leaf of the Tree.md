**Leaf of the Tree**

> Leaf of the Tree
> We found this annoyingly named directory tree starting at /problems/f8fc794974ad619254d983bc423608c6. 
> It would be pretty lame to type out all of those directory names but maybe there is something in there worth finding? 
> And maybe we dont need to type out all those names...? Follow the trunk, using cat and ls!

> HINTS
> Tab completion is a wonderful, wonderful thing

**Writeup**

Seems we have some searching to do. Go to the directory and you will one directory: trunk. If you enter that directory you will find
find another 2 and so on... So best to see what is going on with find:

find .

Now we get a nice layout of folders and one with a word flag:

robbie84@shell-web:/problems/f8fc794974ad619254d983bc423608c6/trunk/trunk47a0$ find . 
.
random_folders.....
./trunk599f/trunk4e66/trunke117/trunk64f5/trunk9721/trunk1e42/flag 
more random_folders.....

There is another way (easier and cleaner), just find all files containing flag:

find | grep flag

> robbie84@shell-web:/problems/f8fc794974ad619254d983bc423608c6$ find | grep flag       
> ./trunk/trunk47a0/trunk599f/trunk4e66/trunke117/trunk64f5/trunk9721/trunk1e42/flag
> robbie84@shell-web:/problems/f8fc794974ad619254d983bc423608c6$                        

Lets try to cat the flag:

cat trunk/trunk47a0/trunk599f/trunk4e66/trunke117/trunk64f5/trunk9721/trunk1e42/flag

and we get:
> a2916629ba334b79632b6af945131ea2robbie84@shell-web:/problems/f8fc794974ad619254d983bc423608c6$                                                                              

As you can see, my shell is now: a2916629ba334b79632b6af945131ea2robbie84@shell-web:/problems/f8fc794974ad619254d983bc423608c6$

What is that at the beginning and before my name?

flag: a2916629ba334b79632b6af945131ea2


