**Meta Find Me**

> Meta Find Me
> Find the location of the flag in the image: image.jpg. 
> Note: Latitude and longitude values are in degrees with no degree symbols,/direction letters, minutes, seconds, or periods. 
> They should only be digits. The flag is not just a set of coordinates - if you think that, keep looking!

>  HINTS
> How can images store location data? Perhaps search for GPS info on photos.

**Writeup**

We get image.jpg file. 

So what we need to do is extract the metadata of the image.jpg. Metadata is the data of which image.jpg is constructed.

In linux we can use exiftool. If you dont have it, apt-get install exiftool. So:

> exiftool image.jpg

And you will get a big pile of information. Scroll down slowly and remember we are looking for some kine of GPS latitude\longitude.

First weird thing we find is:

> Comment: "Your flag is flag_2_meta_4_me_<lat>_<lon>_8571. Now find the GPS coordinates of this image! (Degrees only please)"

And below that:

> GPS Position: 33 deg 0' 0.00", 160 deg 0' 0.00"

So, lets combine:

Your flag is flag_2_meta_4_me_<33>_<160>_8571

flag: flag_2_meta_4_me_33_160_8571

