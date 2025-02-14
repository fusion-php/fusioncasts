<php>
use function \Fusion\{prop};

$name = prop('Aaron');

// All props are "tracked".
$name = strtoupper($name);
</php>

<template>
  Hello {{ name }}!
</template>