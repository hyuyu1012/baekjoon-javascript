import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solution():
    n = int(input())
    graph = [[] for _ in range(n + 1)]
    visited = [-1] * (n + 1)

    for _ in range(n - 1):
        a, b, c = map(int, input().split())
        graph[a].append((b, c))
        graph[b].append((a, c))

    def dfs(v, prev):
        for nxt, weight in graph[v]:
            if visited[nxt] == -1:
                visited[nxt] = prev + weight
                dfs(nxt, visited[nxt])

    visited[1] = 0
    dfs(1, 0)
    print(max(visited))

solution()