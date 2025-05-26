<?php
  fscanf(STDIN, "%d %d", $a, $b);
  fprintf(STDOUT, "%d\n", $a + $b);
  fprintf(STDOUT, "%d\n", $a - $b);
  fprintf(STDOUT, "%d\n", $a * $b);
  fprintf(STDOUT, "%d\n", intdiv($a , $b));
  fprintf(STDOUT, "%d", $a % $b);
?>