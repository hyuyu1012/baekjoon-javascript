import sys
sys.setrecursionlimit(10**6)

data = sys.stdin.read().split()
N = int(data[0])
board = []
idx = 1
for i in range(N):
    board.append(data[idx:idx+N])
    idx += N

dx = [1, 0]
dy = [0, 1]

def calcByOperation(preVal, curVal, op):
    if op == '+':
        return preVal + curVal
    elif op == '-':
        return preVal - curVal
    elif op == '*':
        return preVal * curVal

def setMinMaxValueInMap(x, y, curResult, operation):
    global maxOfCalculation, minOfCalculation
    if x == N - 1 and y == N - 1:
        maxOfCalculation = max(maxOfCalculation, curResult)
        minOfCalculation = min(minOfCalculation, curResult)
        return
    
    for i in range(2):
        nx, ny = x + dx[i], y + dy[i]
        if 0 <= nx < N and 0 <= ny < N:
            if board[nx][ny] in '+-*':
                setMinMaxValueInMap(nx, ny, curResult, board[nx][ny])
            else:
                calculationResult = calcByOperation(curResult, int(board[nx][ny]), operation)
                setMinMaxValueInMap(nx, ny, calculationResult, operation)

maxOfCalculation, minOfCalculation = -float("inf"), float("inf")
setMinMaxValueInMap(0, 0, int(board[0][0]), '')
print(maxOfCalculation, minOfCalculation)