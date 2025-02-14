<php>
use function \Fusion\{prop};
use \App\Models\Podcast;

$podcast = prop()->fromRoute(class: Podcast::class);
</php>

<template>
  Podcast: {{ podcast.title }}
</template>
