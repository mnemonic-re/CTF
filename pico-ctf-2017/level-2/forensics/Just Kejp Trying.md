**Just Keyp Trying**

> Just Keyp Trying
> Here's an interesting capture of some data. But what exactly is this data? Take a look: data.pcap

> HINTS
> Find out what kind of packets these are. What does the info column say in Wireshark/Cloudshark?
> What changes between packets? What does that data look like?
> Maybe take a look at http://www.usb.org/developers/hidpage/Hut1_12v2.pdf?

Ok, another pcap file. We need to analyse it. Use Wireshark as suggested.

First we can see that data.pcap contains USB packets. Also title (Just Kejp trying) suggests it might be keyboard press event.

Lets try to find a keyboard map: https://docs.mbed.com/docs/ble-hid/en/latest/api/md_doc_HID.html

Now we can see what each byte means in the "leftover capture data" section.

On the website is says:

[modifier, reserved, Key1, Key2, Key3, Key4, Key6]

So we look in Leftover Capture Data: 0000090000000000 to get the flag and we have some more info: 
0x20 = Right Shift and 0x01 = Left Ctrl

Every other packet contains the value, in between is 0.

[Leftovers](https://github.com/robbie-re/CTF/blob/CTF/pico-ctf-2017/level-2/forensics/data/leftovers.txt "")

So we reconstruct the flag as said in the Hints pdf file under "10 Keyboard/Keypad Page (0x07)" and we get:

flag{pr355_0nwards_b8485d5f}


