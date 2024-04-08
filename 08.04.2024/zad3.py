#zad 3.1
with open('Dane_2305/pi_przyklad.txt', 'r') as file:
    data = file.read().split('\n')
    data.pop()
    count=0
    for i in range(0, len(data)-1):
        if int(data[i]) * 10 + int(data[i+1]) > 90:
            count+=1
    if int(data[len(data)-2]) * 10 + int(data[len(data)-1]) > 90:
            count+=1
    print(count)

#zad 3.2

with open('Dane_2305/pi_przyklad.txt', 'r') as file:
    data = file.read().split('\n')
    data.pop()
    counting = {}
    for i in range(0, len(data)-1):
        if data[i] + data[i+1] in counting:
             counting[data[i] + data[i+1]] += 1
        else:
            counting[data[i] + data[i+1]] = 1

    if data[len(data)-2] + data[len(data)-1] in counting:
        counting[data[len(data)-2] + data[len(data)-1]] += 1
    else: 
         counting[data[len(data)-2] + data[len(data)-1]] =0
    min_k = '00'
    min_v = 1000000000
    max_k = '00'
    max_v = 0
    keys = list(counting.keys())
    keys.sort()
    for key in keys:
        if counting[key] > max_v:
            max_k = key
            max_v = counting[key]
        if counting[key] < min_v:
            min_k = key
            min_v = counting[key]
    if min_v >0:
        for i in range(100):
            if str(i) not in counting:
                if i < 10:  min_k = '0'+ str(i)
                else:  min_k = str(i)   
                min_v = 0
                break
    print(min_k, min_v)
    print(max_k, max_v)
    print(counting)