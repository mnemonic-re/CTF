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


