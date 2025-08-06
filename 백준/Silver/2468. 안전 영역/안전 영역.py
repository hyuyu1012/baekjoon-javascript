def solution():
    import sys
    sys.setrecursionlimit(100000)
    input = sys.stdin.readline

    N = int(input().strip())
    graph = [list(map(int, input().split())) for _ in range(N)]

    max_height = max(map(max, graph))
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    def dfs(x, y, visited, water_level):
        visited[x][y] = True
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N:
                if not visited[nx][ny] and graph[nx][ny] > water_level:
                    dfs(nx, ny, visited, water_level)

    answer = 0
    for water in range(0, max_height + 1):
        visited = [[False] * N for _ in range(N)]
        count = 0
        for i in range(N):
            for j in range(N):
                if not visited[i][j] and graph[i][j] > water:
                    dfs(i, j, visited, water)
                    count += 1
        answer = max(answer, count)

    print(answer)


if __name__ == "__main__":
    solution()