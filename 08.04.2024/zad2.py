
#zad 2.1
def obliczBloki(l, con=False):
    if con:
        l=str(bin(l))[2:]
    last = l[0]
    bloki = 1
    for char in l:
        if last != char:
            last = char
            bloki+=1
    return bloki

#zad 2.2

with open('Dane_2305/bin_przyklad.txt', 'r') as file:
    data = file.read().split('\n')
    data.pop()
    count=0
    for num in data:
        if obliczBloki(num) <= 2:
            count+=1
    print(count)

#zad 2.3

with open('Dane_2305/bin_przyklad.txt', 'r') as file:
    data = file.read().split('\n')
    data.pop()
    top = "0"
    for num in data:
        if int(top, 2) < int(num, 2):
            top = num
    print(top)

# 2.4

with open('Dane_2305/bin_przyklad.txt', 'r') as file:
    data = file.read().split('\n')
    data.pop()
    for num in data:
        result = int(num, 2) ^ (int(num, 2) // 2)

        print(bin(result))