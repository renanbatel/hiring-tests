<?php

$stdin = fopen("php://stdin", "r");
fscanf($stdin, "%d\n", $n);
fscanf($stdin, "%d\n", $m);

$matrix = array();

for ($i = 0; $i < $n; $i++) {
    fscanf($stdin, "%[^\n]", $matrix_temp);
    $matrix[] = array_map('intval', preg_split('/ /', $matrix_temp, -1, PREG_SPLIT_NO_EMPTY));
}

fclose($stdin);

/**
 * Check if the matrix is valid
 *
 * @param integer $n The matrix lines number
 * @param integer $m The matrix columns number
 * @param array $matrix The matrix
 * @return boolean
 * 
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
function isValidMatrix(int $n, int $m, array $matrix): bool {
    if ($n > 0 && $n < 10 && $m > 0 && $m < 10 && count($matrix) === $n) {
        return array_reduce($matrix, function ($carry, $row) use ($m) {

            return $carry && count($row) === $m;
        }, true);
    }

    return false;
}

/**
 * Check if the cell is a undiscovered region cell
 *
 * @param array $matrix
 * @param integer $rowKey
 * @param integer $cellKey
 * @return boolean
 * 
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
function isRegionCell(array $matrix, int $rowKey, int $cellKey): bool {
    
    return isset($matrix[$rowKey]) 
        && isset($matrix[$rowKey][$cellKey])
        && $matrix[$rowKey][$cellKey] === 1;
}

/**
 * Walk through the region cells to discover it
 *
 * @param array $matrix The matrix reference
 * @param integer $rowKey The row key
 * @param integer $cellKey The cell key
 * @param integer $regionNumber The number of the region
 * @return integer The number of cells in the region
 * 
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
function discoverRegion(array &$matrix, int $rowKey, int $cellKey, int $regionNumber): int {
    $neighborCoordinates = [
        [ $rowKey, $cellKey + 1 ], // right
        [ $rowKey + 1, $cellKey + 1 ], // bottom-right
        [ $rowKey + 1, $cellKey ], // bottom
        [ $rowKey + 1, $cellKey - 1 ], // bottom-left
        [ $rowKey, $cellKey - 1 ], // left
        [ $rowKey - 1, $cellKey - 1 ], // top-left
        [ $rowKey - 1, $cellKey ], // top
        [ $rowKey - 1, $cellKey + 1 ], // top-right
    ];
    $matrix[$rowKey][$cellKey] = $regionNumber;
    $cells = 1;

    foreach ($neighborCoordinates as $neighborCoordinate) {
        if (isRegionCell($matrix, $neighborCoordinate[0], $neighborCoordinate[1])) {
            $cells += discoverRegion(
                $matrix,
                $neighborCoordinate[0],
                $neighborCoordinate[1],
                $regionNumber
            );
        }
    }

    return $cells;
}

/**
 * Count the matrix regions
 *
 * @param array $matrix
 * @return array The regions with the number of cells in each
 * 
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
function countMatrixRegions(array $matrix): array {
    $regions = [];

    // The row and cell must be passed as reference
    // so it can see the already discovered regions
    foreach ($matrix as $rowKey => &$row) {
        foreach ($row as $cellKey => &$cell) {
            // New region
            if ($cell === 1) {
                $regions[] = discoverRegion($matrix, $rowKey, $cellKey, count($regions) + 2);
            }
        }
    }

    return $regions;
}

// Complete the connectedCell function below.
function connectedCell(&$matrix) {
    global $n, $m;
    
    if (isValidMatrix(intval($n), intval($m), $matrix)) {
        $regions = countMatrixRegions($matrix);

        return max($regions);
    }

    return "Your matrix is not valid, the number of lines and columns must be between 0 and 10.";
}

$result = connectedCell($matrix);
print($result."\n");
