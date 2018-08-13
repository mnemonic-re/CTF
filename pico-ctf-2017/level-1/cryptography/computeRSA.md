**computeRSA**

> computeRSA
> RSA encryption/decryption is based on a formula that anyone can find and use, as long as they know the values to plug in. 
> Given the encrypted number 150815, d = 1941, and N = 435979, what is the decrypted number?

> HINTS
> decrypted = (encrypted) ^ d mod N

**Writeup**

> RSA encryption/decryption is based on a formula that anyone can find and use, as long as they know the values to plug in. 
> Given the encrypted number 150815, d = 1941, and N = 435979, what is the decrypted number?

> HINTS
> decrypted = (encrypted) ^ d mod N

If you know the cipertext, key and modulus of RSA, what could possibly go wrong :)

Scripting things like this is great learning but if you do not with to do that, you can simply go to:
https://www.cs.drexel.edu/~introcs/Fa11/notes/10.1_Cryptography/RSA_Express_EncryptDecrypt.html

Modulus(N) is 435979. Decryption key(d) is 1941 and Ciphertext (numeric) is 150815.

Now, enter the values as stated above and you will get the flag in numeric form.

flag: 133337


