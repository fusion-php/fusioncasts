<php>
use function \Fusion\{prop};
use \App\Models\Podcast;

$a = 1;

$podcast = prop()->fromRoute('podcast');
</php>

<template>
  {{ podcast.title }}
</template>
