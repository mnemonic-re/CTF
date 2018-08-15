
**Master Challenge**

> Lazy Dev
> I really need to login to this website, but the developer hasn't implemented login yet. Can you help?

>  HINTS
> Where does the password check actually occur?
> Can you interact with the javascript directly?

Very easy. If you look at the source code and then go to the javascript file you can see some code.

And at the top we have:

> //Validate the password. TBD!<br/>
> function validate(pword){<br/>
>   //TODO: Implement me<br/>
>   return false;<br/>
> }<br/>

We can interact with the site using the developer console (F12). Then we just create our own validation and set it to true:

> validate = function(hax) { return true; }<br/>
> ƒ (hax) { return true; }<br/>

Now type anything in the password field and you get the flag.

flag:

client_side_is_the_dark_sidea99c64effed2c2f1c9347eff536e949c
