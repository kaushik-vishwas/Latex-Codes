/**
 * Full C/C++ Programs Dataset
 * Contains 12 programs covering various DAA concepts
 */

const questions = [
  {
    id: 1,
    title: "Kruskal's Algorithm - Minimum Cost Spanning Tree",
    question: "Design and implement C/C++ Program to find Minimum Cost Spanning Tree of a given connected undirected graph using Kruskal's algorithm.",
    answer: `#include <stdio.h>
#define INF 999
#define MAX 100

int p[MAX], c[MAX][MAX], t[MAX][2];

int find(int v) {
    while (p[v])
        v = p[v];
    return v;
}

void union1(int i, int j) {
    p[j] = i;
}

void kruskal(int n) {
    int i, j, k, u, v, min, res1, res2, sum = 0;
    
    for (k = 1; k < n; k++) {
        min = INF;
        for (i = 1; i < n - 1; i++) {
            for (j = 1; j <= n; j++) {
                if (i == j)
                    continue;
                if (c[i][j] < min) {
                    u = find(i);
                    v = find(j);
                    if (u != v) {
                        res1 = i;
                        res2 = j;
                        min = c[i][j];
                    }
                }
            }
        }
        union1(res1, find(res2));
        t[k][1] = res1;
        t[k][2] = res2;
        sum = sum + min;
    }
    
    printf("\\nCost of spanning tree is = %d", sum);
    printf("\\nEdges of spanning tree are:\\n");
    for (i = 1; i < n; i++)
        printf("%d -> %d\\n", t[i][1], t[i][2]);
}

int main() {
    int i, j, n;
    printf("\\nEnter the n value: ");
    scanf("%d", &n);
    
    for (i = 1; i <= n; i++)
        p[i] = 0;
    
    printf("\\nEnter the graph data:\\n");
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            scanf("%d", &c[i][j]);
    
    kruskal(n);
    return 0;
}`
  },
  {
    id: 2,
    title: "Prim's Algorithm - Minimum Cost Spanning Tree",
    question: "Design and implement C/C++ Program to find Minimum Cost Spanning Tree of a given connected undirected graph using Prim's algorithm.",
    answer: `#include <stdio.h>
#define INF 999

int prim(int c[10][10], int n, int s) {
    int v[10], i, j, sum = 0, ver[10], d[10], min, u;
    
    for (i = 1; i <= n; i++) {
        ver[i] = s;
        d[i] = c[s][i];
        v[i] = 0;
    }
    v[s] = 1;
    
    for (i = 1; i <= n - 1; i++) {
        min = INF;
        for (j = 1; j <= n; j++)
            if (v[j] == 0 && d[j] < min) {
                min = d[j];
                u = j;
            }
        v[u] = 1;
        sum = sum + d[u];
        printf("\\n%d -> %d sum = %d", ver[u], u, sum);
        
        for (j = 1; j <= n; j++)
            if (v[j] == 0 && c[u][j] < d[j]) {
                d[j] = c[u][j];
                ver[j] = u;
            }
    }
    return sum;
}

int main() {
    int c[10][10], i, j, res, s, n;
    printf("\\nEnter n value: ");
    scanf("%d", &n);
    
    printf("\\nEnter the graph data:\\n");
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            scanf("%d", &c[i][j]);
    
    printf("\\nEnter the source node: ");
    scanf("%d", &s);
    
    res = prim(c, n, s);
    printf("\\nCost = %d", res);
    return 0;
}`
  },
  {
    id: "3a",
    title: "Floyd's Algorithm - All-Pairs Shortest Path",
    question: "Design and implement C/C++ Program to solve All-Pairs Shortest Paths problem using Floyd's algorithm.",
    answer: `#include <stdio.h>
#define INF 999

int min(int a, int b) {
    return (a < b) ? a : b;
}

void floyd(int p[][10], int n) {
    int i, j, k;
    for (k = 1; k <= n; k++)
        for (i = 1; i <= n; i++)
            for (j = 1; j <= n; j++)
                p[i][j] = min(p[i][j], p[i][k] + p[k][j]);
}

int main() {
    int a[10][10], n, i, j;
    printf("\\nEnter the n value: ");
    scanf("%d", &n);
    
    printf("\\nEnter the graph data:\\n");
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            scanf("%d", &a[i][j]);
    
    floyd(a, n);
    
    printf("\\nShortest path matrix\\n");
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++)
            printf("%d ", a[i][j]);
        printf("\\n");
    }
    return 0;
}`
  },
  {
    id: "3b",
    title: "Warshall's Algorithm - Transitive Closure",
    question: "Design and implement C/C++ Program to find the transitive closure using Warshall's algorithm.",
    answer: `#include <stdio.h>

void warsh(int p[][10], int n) {
    int i, j, k;
    for (k = 1; k <= n; k++)
        for (i = 1; i <= n; i++)
            for (j = 1; j <= n; j++)
                p[i][j] = p[i][j] || (p[i][k] && p[k][j]);
}

int main() {
    int a[10][10], n, i, j;
    printf("\\nEnter the n value: ");
    scanf("%d", &n);
    
    printf("\\nEnter the graph data:\\n");
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            scanf("%d", &a[i][j]);
    
    warsh(a, n);
    
    printf("\\nResultant path matrix\\n");
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++)
            printf("%d ", a[i][j]);
        printf("\\n");
    }
    return 0;
}`
  },
  {
    id: 4,
    title: "Dijkstra's Algorithm - Shortest Path",
    question: "Design and implement C/C++ Program to find shortest paths from a given vertex in a weighted connected graph to other vertices using Dijkstra's algorithm.",
    answer: `#include <stdio.h>
#define INF 999

void dijkstra(int c[10][10], int n, int s, int d[10]) {
    int v[10], min, u, i, j;
    
    for (i = 1; i <= n; i++) {
        d[i] = c[s][i];
        v[i] = 0;
    }
    v[s] = 1;
    
    for (i = 1; i <= n; i++) {
        min = INF;
        for (j = 1; j <= n; j++)
            if (v[j] == 0 && d[j] < min) {
                min = d[j];
                u = j;
            }
        v[u] = 1;
        for (j = 1; j <= n; j++)
            if (v[j] == 0 && (d[u] + c[u][j]) < d[j])
                d[j] = d[u] + c[u][j];
    }
}

int main() {
    int c[10][10], d[10], i, j, s, n;
    printf("\\nEnter n value: ");
    scanf("%d", &n);
    
    printf("\\nEnter the graph data:\\n");
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            scanf("%d", &c[i][j]);
    
    printf("\\nEnter the source node: ");
    scanf("%d", &s);
    
    dijkstra(c, n, s, d);
    
    for (i = 1; i <= n; i++)
        printf("\\nShortest distance from %d to %d is %d", s, i, d[i]);
    
    return 0;
}`
  },
  {
    id: 5,
    title: "Topological Ordering of Vertices",
    question: "Design and implement C/C++ Program to obtain the Topological ordering of vertices in a given digraph.",
    answer: `#include <stdio.h>

int temp[10], k = 0;

void sort(int a[][10], int id[], int n) {
    int i, j;
    for (i = 1; i <= n; i++) {
        if (id[i] == 0) {
            id[i] = -1;
            temp[++k] = i;
            for (j = 1; j <= n; j++) {
                if (a[i][j] == 1 && id[j] != -1)
                    id[j]--;
            }
            i = 0;
        }
    }
}

int main() {
    int a[10][10], id[10], n, i, j;
    printf("\\nEnter the n value: ");
    scanf("%d", &n);
    
    for (i = 1; i <= n; i++)
        id[i] = 0;
    
    printf("\\nEnter the graph data:\\n");
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++) {
            scanf("%d", &a[i][j]);
            if (a[i][j] == 1)
                id[j]++;
        }
    
    sort(a, id, n);
    
    if (k != n)
        printf("\\nTopological ordering not possible");
    else {
        printf("\\nTopological ordering is: ");
        for (i = 1; i <= k; i++)
            printf("%d ", temp[i]);
    }
    return 0;
}`
  },
  {
    id: 6,
    title: "0/1 Knapsack Problem - Dynamic Programming",
    question: "Design and implement C/C++ Program to solve 0/1 Knapsack problem using Dynamic Programming method.",
    answer: `#include <stdio.h>

int w[10], p[10], n;

int max(int a, int b) {
    return a > b ? a : b;
}

int knap(int i, int m) {
    if (i == n)
        return w[i] > m ? 0 : p[i];
    if (w[i] > m)
        return knap(i + 1, m);
    return max(knap(i + 1, m), knap(i + 1, m - w[i]) + p[i]);
}

int main() {
    int m, i, max_profit;
    printf("\\nEnter the no. of objects: ");
    scanf("%d", &n);
    printf("\\nEnter the knapsack capacity: ");
    scanf("%d", &m);
    
    printf("\\nEnter profit followed by weight:\\n");
    for (i = 1; i <= n; i++)
        scanf("%d %d", &p[i], &w[i]);
    
    max_profit = knap(1, m);
    printf("\\nMax profit = %d", max_profit);
    return 0;
}`
  },
  {
    id: 7,
    title: "Discrete & Continuous Knapsack - Greedy Method",
    question: "Design and implement C/C++ Program to solve discrete Knapsack and continuous Knapsack problems using greedy approximation method.",
    answer: `#include <stdio.h>
#define MAX 50

int p[MAX], w[MAX], x[MAX];
double maxprofit;
int n, m, i;

void greedyKnapsack(int n, int w[], int p[], int m) {
    double ratio[MAX];
    
    for (i = 0; i < n; i++) {
        ratio[i] = (double)p[i] / w[i];
    }
    
    for (i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (ratio[i] < ratio[j]) {
                double temp = ratio[i];
                ratio[i] = ratio[j];
                ratio[j] = temp;
                
                int temp2 = w[i];
                w[i] = w[j];
                w[j] = temp2;
                
                temp2 = p[i];
                p[i] = p[j];
                p[j] = temp2;
            }
        }
    }
    
    int currentWeight = 0;
    maxprofit = 0.0;
    
    for (i = 0; i < n; i++) {
        if (currentWeight + w[i] <= m) {
            x[i] = 1;
            currentWeight += w[i];
            maxprofit += p[i];
        } else {
            x[i] = (m - currentWeight) / (double)w[i];
            maxprofit += x[i] * p[i];
            break;
        }
    }
    
    printf("Optimal solution for greedy method: %.1f\\n", maxprofit);
    printf("Solution vector for greedy method: ");
    for (i = 0; i < n; i++)
        printf("%d\\t", x[i]);
}

int main() {
    printf("Enter the number of objects: ");
    scanf("%d", &n);
    
    printf("Enter the objects' weights: ");
    for (i = 0; i < n; i++)
        scanf("%d", &w[i]);
    
    printf("Enter the objects' profits: ");
    for (i = 0; i < n; i++)
        scanf("%d", &p[i]);
    
    printf("Enter the maximum capacity: ");
    scanf("%d", &m);
    
    greedyKnapsack(n, w, p, m);
    return 0;
}`
  },
  {
    id: 8,
    title: "Subset Sum Problem using Backtracking",
    question: "Design and implement C/C++ Program to find a subset of a given set S = {s1, s2,....., sn} of n positive integers whose sum is equal to a given positive integer d.",
    answer: `#include <stdio.h>
#define MAX 10

int s[MAX], x[MAX], d;

void sumofsub(int p, int k, int r) {
    int i;
    x[k] = 1;
    
    if ((p + s[k]) == d) {
        for (i = 1; i <= k; i++)
            if (x[i] == 1)
                printf("%d ", s[i]);
        printf("\\n");
    } else if (p + s[k] + s[k + 1] <= d)
        sumofsub(p + s[k], k + 1, r - s[k]);
    
    if ((p + r - s[k] >= d) && (p + s[k + 1] <= d)) {
        x[k] = 0;
        sumofsub(p, k + 1, r - s[k]);
    }
}

int main() {
    int i, n, sum = 0;
    printf("\\nEnter the n value: ");
    scanf("%d", &n);
    
    printf("\\nEnter the set in increasing order: ");
    for (i = 1; i <= n; i++)
        scanf("%d", &s[i]);
    
    printf("\\nEnter the max subset value: ");
    scanf("%d", &d);
    
    for (i = 1; i <= n; i++)
        sum = sum + s[i];
    
    if (sum < d || s[1] > d)
        printf("\\nNo subset possible");
    else
        sumofsub(0, 1, sum);
    
    return 0;
}`
  },
  {
    id: 9,
    title: "Selection Sort - Time Complexity Analysis (Python Code)",
    question: "Design and implement C/C++ Program to sort a given set of n integer elements using Selection Sort method and compute its time complexity.",
    answer: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void selectionSort(int arr[], int n) {
    int i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

void generateRandomNumbers(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        arr[i] = rand() % 10000;
    }
}

int main() {
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    if (n <= 5000) {
        printf("Please enter a value greater than 5000\\n");
        return 1;
    }
    
    int *arr = (int *)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    
    generateRandomNumbers(arr, n);
    
    clock_t start = clock();
    selectionSort(arr, n);
    clock_t end = clock();
    
    double time_taken = ((double)(end - start)) / CLOCKS_PER_SEC;
    printf("Time taken to sort %d elements: %f seconds\\n", n, time_taken);
    
    free(arr);
    return 0;
}
    # __________________Python Progam_____________
    import matplotlib.pyplot as plt

# Data collected
n_values = [6000, 7000, 8000, 9000, 10000]
time_taken = [0.031000, 0.034000, 0.047000, 0.052000, 0.077000]

plt.plot(n_values, time_taken, marker='o')
plt.title('Selection Sort Time Complexity')
plt.xlabel('Number of Elements (n)')
plt.ylabel('Time taken (seconds)')
plt.grid(True)
plt.show()`
    
  },
  {
    id: 10,
    title: "Quick Sort - Time Complexity Analysis (Python Code)",
    question: "Design and implement C/C++ Program to sort a given set of n integer elements using Quick Sort method and compute its time complexity.",
    answer: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void generateRandomNumbers(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        arr[i] = rand() % 100000;
    }
}

int main() {
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    if (n <= 5000) {
        printf("Please enter a value greater than 5000\\n");
        return 1;
    }
    
    int *arr = (int *)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    
    generateRandomNumbers(arr, n);
    
    clock_t start = clock();
    quickSort(arr, 0, n - 1);
    clock_t end = clock();
    
    double time_taken = ((double)(end - start)) / CLOCKS_PER_SEC;
    printf("Time taken to sort %d elements: %f seconds\\n", n, time_taken);
    
    free(arr);
    return 0;
}
    

#_________________Python Program_________________
import matplotlib.pyplot as plt

# Example data collected
n_values = [10000, 20000, 30000, 35000, 50000]
time_taken = [0.000, 0.015, 0.011, 0.003, 0.015]  # Replace with actual times recorded

plt.plot(n_values, time_taken, marker='o')
plt.title('Quick Sort Time Complexity')
plt.xlabel('Number of Elements (n)')
plt.ylabel('Time taken (seconds)')
plt.grid(True)
plt.show()
`
  },
  {
    id: 11,
    title: "Merge Sort - Time Complexity Analysis (Python Code)",
    question: "Design and implement C/C++ Program to sort a given set of n integer elements using Merge Sort method and compute its time complexity.",
    answer: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void merge(int arr[], int left, int mid, int right) {
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int *L = (int *)malloc(n1 * sizeof(int));
    int *R = (int *)malloc(n2 * sizeof(int));
    
    for (i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    i = 0;
    j = 0;
    k = left;
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
    free(L);
    free(R);
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

void generateRandomArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        arr[i] = rand() % 100000;
}

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    if (n <= 5000) {
        printf("Please enter a value greater than 5000\\n");
        return 1;
    }
    
    int *arr = (int *)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    
    generateRandomArray(arr, n);
    
    clock_t start = clock();
    for (int i = 0; i < 1000; i++) {
        mergeSort(arr, 0, n - 1);
    }
    clock_t end = clock();
    
    double time_taken = ((double)(end - start)) / CLOCKS_PER_SEC / 1000.0;
    printf("Time taken to sort %d elements: %f seconds\\n", n, time_taken);
    
    free(arr);
    return 0;
}
#________________________Python Program______________

import matplotlib.pyplot as plt

# data collected (replace with actual data)
n_values = [6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 15000]
time_taken = [0.000709, 0.000752, 0.000916, 0.001493, 0.001589,
              0.002562, 0.001944, 0.002961, 0.003563]  # Replace with actual times recorded

plt.plot(n_values, time_taken, marker='o')
plt.title('Merge Sort Time Complexity')
plt.xlabel('Number of Elements (n)')
plt.ylabel('Time taken (seconds)')
plt.grid(True)
plt.show()
`
  },
  {
    id: 12,
    title: "N Queen's Problem using Backtracking",
    question: "Design and implement C/C++ Program for N Queen's problem using Backtracking.",
    answer: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void printSolution(int **board, int N) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            printf("%s ", board[i][j] ? "Q" : "#");
        }
        printf("\\n");
    }
}

bool isSafe(int **board, int N, int row, int col) {
    int i, j;
    
    for (i = 0; i < col; i++) {
        if (board[row][i]) {
            return false;
        }
    }
    
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) {
            return false;
        }
    }
    
    for (i = row, j = col; j >= 0 && i < N; i++, j--) {
        if (board[i][j]) {
            return false;
        }
    }
    
    return true;
}

bool solveNQUtil(int **board, int N, int col) {
    if (col >= N) {
        return true;
    }
    
    for (int i = 0; i < N; i++) {
        if (isSafe(board, N, i, col)) {
            board[i][col] = 1;
            
            if (solveNQUtil(board, N, col + 1)) {
                return true;
            }
            
            board[i][col] = 0;
        }
    }
    return false;
}

bool solveNQ(int N) {
    int **board = (int **)malloc(N * sizeof(int *));
    for (int i = 0; i < N; i++) {
        board[i] = (int *)malloc(N * sizeof(int));
        for (int j = 0; j < N; j++) {
            board[i][j] = 0;
        }
    }
    
    if (!solveNQUtil(board, N, 0)) {
        printf("Solution does not exist\\n");
        for (int i = 0; i < N; i++) {
            free(board[i]);
        }
        free(board);
        return false;
    }
    
    printSolution(board, N);
    
    for (int i = 0; i < N; i++) {
        free(board[i]);
    }
    free(board);
    return true;
}

int main() {
    int N;
    printf("Enter the number of queens: ");
    scanf("%d", &N);
    solveNQ(N);
    return 0;
}`
  }
];

export default questions;