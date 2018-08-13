**Challenge: Media-DB**

From the challenge description we can see words like "database", "oauth" and so on but with the Netcat link we have a attachment.

After downloading it we see it is a python script. And when opened... SQL! Working with SQL for a long time now so no matter where it
is written, if there is a injection part somewhere, I will find it :)

First we can observe 2 things:

Creation of tables:

> c.execute("CREATE TABLE oauth_tokens (oauth_token text)")<br/>
> c.execute("CREATE TABLE media (artist text, song text)")<br/>
> c.execute("INSERT INTO oauth_tokens VALUES ('{}')".format(flag))<br/>

So it seems to put our flag into the oauth_tokens table. Further down you will see 2 very simillar SQL queries at choices 2 and 3. 
That can be used as a UNION. Basically queries are same but with small differences. UNION connects them.

So, now lets try to find where possible vulnerability is. 

We see: .replace("'", "") but then at the end: = '{}'".format(artist)

So .replace removes single quotes and replaces them with nothing. But then at the end there is no double quote so it cannot replace them
properly. And that is the case for all cases. That is a vulnerability. 

Lets connect to the server and see what we are offered even though we already know a lot what is happening.

> nc -v media-db.ctfcompetition.com 1337

After connecting we will use UNION to connect the tables but also need to get rid of that last single quote. 
So query could be something like this:

> ' AND 1=0 UNION SELECT oauth_token, 1 FROM oauth_tokens WHERE 1=1 OR ''='

After connecting:

![gflag](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/media_db/data/media_db.png)


And SQL injection works and we get the flag. SQL injections are really fun and quite often because developers make mistakes. I suggest
reading up on the subject. It isnt super-easy but it isnt hard either and you will have SQL injections on a lot of CTFs so it is good
to know how it works.

flag: CTF{fridge_cast_oauth_token_cahn4Quo}




