from collections import deque

def bfs(graph, v):
    visited = []
    needvisited = deque()
    needvisited.append(v)
    while needvisited:
        node = needvisited.popleft()
        if node not in visited:
            visited.append(node)
            print(node, end=' ')
            needvisited.extend(graph[node-1])
def dfs(graph, v):
    visited = []
    needvisited = []
    needvisited.append(v)

    while needvisited:
        node = needvisited.pop()
        if node not in visited:
            visited.append(node)
            print(node, end = ' ')
            needvisited.extend(graph[node-1][::-1])
n,m,v = map(int, input().split())
graph = [[] for i in range(n)]
for i in range(m):
    x,y = map(int, input().split())
    if x == y:
        graph[x-1].append(x)
    else:
        graph[x-1].append(y)
        graph[y-1].append(x)
for i in range(n):
        graph[i].sort()
dfs(graph, v)
print('')
bfs(graph, v)

