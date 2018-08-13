**Leaf of the Forest**

> Leaf of the Forest
> We found an even bigger directory tree hiding a flag starting at /problems/d9fbdb968961f708989999193aaca05d. 
> It would be impossible to find the file named flag manually...


> HINTS
> Is there a search function in Linux? Like if I wanted to 'find' something...

**Writeup**

Simillar challenge to the Leaf of the Tree. Go to the directory in the terminal and you will again find one directory - Forest.

Lets use find again and grep the flag.

> robbie84@shell-web:/problems/d9fbdb968961f708989999193aaca05d$ find . | grep flag     
> ./forest/tree3bd8a8/trunkc5a8/trunkc874/trunkb0d5/trunk989b/trunkd500/trunk68dc/trunkd705/branchc164/flag
> robbie84@shell-web:/problems/d9fbdb968961f708989999193aaca05d$  

cat the flag:

cat forest/tree3bd8a8/trunkc5a8/trunkc874/trunkb0d5/trunk989b/trunkd500/trunk68dc/trunkd/branchc164/flag

flag: e553af78ff1f7a6a428456ac53d837e5


