flag = "849381BC93B0A89897A6B494B0A8B583BD9885A2B3B3A2B598B3AFF3A998F698ACF8BA"

temp = bytearray(flag.decode('hex'))

output = ""
for chars in temp:
	output += chr(chars ^ 0xc7) # XOR key - IDA: 00000000414144BA 83 F0 C7	xor eax, 0FFFFFFC7h

print output