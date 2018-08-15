.global main

main:
    mov eax, XXXXXXX
    mov ebx, 0 
    mov ecx, 0x7
loop:
    test eax, eax
    jz fin
    add ebx, ecx
    dec eax
    jmp loop
fin:
    cmp ebx, 0x97c9
    je good
    mov eax, 0
    jmp end
good:
    mov eax, 1
end:
    ret
