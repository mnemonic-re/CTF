**computeAES**

> computeAES
> You found this clue laying around. Can you decrypt it?

>  HINTS
> Try online tools or python

**Writeup**

We are presented with this:

> Encrypted with AES in ECB mode. All values base64 encoded<br/>
> ciphertext = ACw5ftWAMhGPpxkbT1iun8aLQ55rGrYUMjeyZfIlYd8Whz8TwCMg1AgeTA83J7qt<br/>
> key = zb9v8uGYo/BWzbhouenY2g==<br/>

As it clearly says, ALL values are base64 encoded. So lets decode them but we need to keep in mind that they need to be in HEX.

> ciphertext(hex) = 002c397ed58032118fa7191b4f58ae9fc68b439e6b1ab6143237b265f22561df16873f13c02320d4081e4c0f3727baad<br/>
> key(hex) = cdbf6ff2e198a3f056cdb868b9e9d8da<br/>

ECB mode for decryption. Go to http://aes.online-domain-tools.com/ and input ciphertext and key and hit DECRYPT!


flag: flag{do_not_let_machines_win_68fa218c}


