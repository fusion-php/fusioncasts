<php>
use function \Fusion\{prop, expose};
use \App\Models\Podcast;

$search = prop('');
$podcasts = prop(function() use ($search) {
    if ($search) {
        return Podcast::query()->where('title', 'like', "%$search%")->get();
    }

    return Podcast::all();
})->readonly();

expose(favorite: function(Podcast $podcast) {
    return response()->json($podcast->toggleFavorite());
});
</php>

<template>
  <Head title="Home" />
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
      <!-- @TODO show how you could import favorite instead of using it inline -->
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
