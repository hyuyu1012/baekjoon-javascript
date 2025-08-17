import math
N,K = map(int, input().split(" "))
dp = (N+1) * [float("inf")]
dp[0] = 0
for i in range(1, N+1):
  dp[i] = min(dp[i-1] + 1, dp[i])
  temp = i + math.floor(i/2)
  if(temp <= N):
    dp[temp] = min(dp[temp], dp[i] + 1)


if(dp[N] <=K):
  print("minigimbob")
else:
  print("water")