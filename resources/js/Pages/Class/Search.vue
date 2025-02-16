<php>
use \App\Models\Podcast;

new class {
    public string $search = '';

    #[\Fusion\Attributes\IsReadOnly]
    public \Illuminate\Support\Collection $podcasts;

    public function mount() {
          $this->podcasts = $this->search
            ? Podcast::query()->where('title', 'like', "%{$this->search}%")->get()
            : Podcast::all();
    }

    public function favorite(Podcast $podcast) {
        return response()->json($podcast->toggleFavorite());
    }
}
</php>

<template>
  <Head title="Search" />
  <div class="p-6 max-w-4xl mx-auto">
    <div class='mb-6'>
      <div class="flex gap-2">
        <input
          type="text"
          v-model='search'
          class="p-2 border border-zinc-200 rounded-md focus-within:ring-2 ring-blue-500 outline-none w-72"
          placeholder="Search podcasts"
        />
        <button
          @click='fusion.sync'
          class="bg-blue-500 hover:bg-blue-600 text-white rounded-md w-24 flex items-center justify-center cursor-pointer"
        >
          <LoadingIcon v-if="fusion.sync.processing" />
          <span v-else>Search</span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6">
      <!-- @TODO show how you can import it, instead of just doing it inline -->
      <Podcast
        v-for="podcast in podcasts"
        :key="podcast.id"
        v-bind="podcast"
        @favorited='favorite({podcast}).then(fav => podcast.favorited = fav)'
      />
    </div>
  </div>
</template>
<script>
import Podcast from '@/Components/Podcast.vue'
import LoadingIcon from '@/Components/LoadingIcon.vue'
import {Head} from '@inertiajs/vue3'

export default {
  components: {
    Head,
    Podcast,
    LoadingIcon,
  }
}
</script>
