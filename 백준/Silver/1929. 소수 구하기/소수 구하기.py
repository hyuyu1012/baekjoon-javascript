def solution():
  for i in range(2, m+1):
    if(lst[i] == False):
      continue
    count = 2
    while(True):
      temp = i * count
      if(temp > m):
        break
      lst[temp] = False
      count = count + 1

  for i in range(n, m+1):
    if(lst[i] == True):
      print(i)

n,m = map(int, input().split())
lst = [True] * (m+1)
lst[0] = False
lst[1] = False

solution();