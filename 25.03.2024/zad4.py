
WKSlowa = []
with open('Dane_2305/przyklad.txt', 'r') as file:
    slowa = file.read().splitlines()
    for slowo in slowa:
        k= slowo.count('k')
        w= slowo.count('w')
        if k==w:
            WKSlowa.append(slowo)

with open('wyniki4_1.txt', 'w') as file:
    file.write('\n'.join(WKSlowa))

mozliweSlowa = []

with open('Dane_2305/przyklad.txt', 'r') as file:
    slowa = file.read().splitlines()
    for slowo in slowa:
        k= slowo.count('k')
        w= slowo.count('w')
        a= int(slowo.count('a') / 2)
        j= slowo.count('j')
        c= slowo.count('c')
        e= slowo.count('e')
        liczby = min([w,a,k,c,j,e])
        mozliweSlowa.append(liczby)

with open('wyniki4_2.txt', 'w') as file:
    file.write(' '.join(str(x) for x in mozliweSlowa))

wakacyjneSlowa = []
WAKACJE = 'wakacje'
with open('Dane_2305/przyklad.txt', 'r') as file:
    slowa = file.read().splitlines()
    for slowo in slowa:
        step = 0
        wykreslone = 0
        for i in range(len(slowo)):
            if slowo[i] == WAKACJE[step]:
                step+=1
                if step == 7: 
                    step = 0
            else:
                wykreslone += 1
        wakacyjneSlowa.append(wykreslone + step)

with open('wyniki4_3.txt', 'w') as file:
    file.write(' '.join(str(x) for x in wakacyjneSlowa))