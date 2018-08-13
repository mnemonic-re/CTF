**Challenge: Firmware**

We are moving on! This is a nice RE challenge.

We are presented with something interesting in the attachment. A big 81mb file: challenge.ext4.gz

If we examine EXT4 extension we will see it is actually a partition\filesystem. So we can either try to to mount it or extract it. 
Again, 7zip is proving very useful. Open challenge.ext4 in 7zip and you can clearly see the folder structure.

There is a file named: 

> .mediapc_backdoor_password.gz

If we extract that file we get ".mediapc_backdoor_password" without any extensions but just open it in hex editor or notepad and you get
the flag.

Mounting the filesystem is also a good idea and you should explore it. It is very easy, just google "mount ext4 filesystem".

flag: CTF{I_kn0W_tH15_Fs}

