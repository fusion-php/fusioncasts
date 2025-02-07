<php>
use function \Fusion\{prop};

$name = prop('Aaron');

$name = strtoupper($name);
</php>
<template>
  Hello {{ name }}!
</template>