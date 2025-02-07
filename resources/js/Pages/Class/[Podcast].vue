<php>
new class {
    public \App\Models\Podcast $podcast;

    public function mount(\App\Models\Podcast $podcast)
    {
        $this->podcast = $podcast;
    }
};
</php>

<template>
  {{ podcast.title }}
</template>
