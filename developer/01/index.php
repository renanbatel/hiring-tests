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

// Complete the connectedCell function below.
function connectedCell(&$matrix) {
    
}

$result = connectedCell($matrix);
print($result."\n");
