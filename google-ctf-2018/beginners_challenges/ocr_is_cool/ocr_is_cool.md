**Challenge: OCR is Cool**


Level 2 of the challenge. Download the attachment and extract the zip file. You will get a OCR_is_cool.png file.
Open the file AND ALWAYS use some kind of sandbox for opening files even if you are sure they are "fine". Just use it!

You will see a gmail message with message as "gibberish". If you read the challenge description it says "Caesar once said,....." and that is a clear hint it is some kind of a cipher. Ceaser cipher is a subistitution cipher. You can easily look it up on the wiki.

While it is usually called ROT 13, letters can be rotated any number of times but it is usually up to 25 or so. We can look for a rotation decoder online but first we need to actually get the gibberish text. If you want you can type it out manually :) but as the challenge name says, just use OCR. If you have linux (VM or standard) or Cygwin for windows or some windows tool you can easily dump the content of the .png file into some other file for analysis. So lets do it. I will just use OCR tool in linux called tesseract:

> ocr_is_cool# tesseract OCR_is_cool.png output.txt

Now we get a nice file to analyse! Ok, output is never perfect but we have some ideas on how flag is formatted so we will to search for known parts. Lets try search for "{". First result we get is: VMY{vtxitkvbiaxkbltinulmbmnmbhgvbiaxk}. It sure looks like a possible flag
with even both curlys!

Lets try to decode it but first lets see if there are any errors OCR might have done. It is better to now manually type out the flag
from the picture itself than from the output. So, transcribe it correctly from the image:

VMY{vtxltkvbiaxkbltlnulmbmnmbhgvbiaxk}

Some "i" were "l" but it means the difference between garbage and real flag!

Go to https://www.rot13.com/ so you can select which ROT to use. Enter the ciphertext and start from ROT1. 
If it doesnt work just go to ROT2 and so and watch the text. When you reach ROT 7, you will get a nice juicy flag :)

flag: CTF{caesarcipherisasubstitutioncipher}



