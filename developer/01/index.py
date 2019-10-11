#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the connectedCell function below.
def connectedCell(matrix):
	pass

if __name__ == '__main__':

    n = int(input())

    m = int(input())

    matrix = []

    for _ in range(n):
        matrix.append(list(map(int, input().rstrip().split())))

    result = connectedCell(matrix)

    print(str(result) + '\n')
