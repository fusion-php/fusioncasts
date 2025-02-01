<!-- comment -->
<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div class="flex gap-2 mb-6">
      <input
        type="text"
        class="p-2 border border-zinc-200 rounded-md focus-within:ring-2 ring-blue-500 outline-none w-72"
        placeholder="Search podcasts"
      />
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white rounded-md w-24 flex items-center justify-center cursor-pointer"
      >
        <LoadingIcon v-if="loading" />
        <span v-else>Search</span>
      </button>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <Podcast
        v-for="podcast in podcasts"
        :key="podcast.id"
        v-bind="podcast"
        @favorited="() => console.log('favorited')"
      />
    </div>
  </div>
</template>
<script>
import Podcast from '@/Components/Podcast.vue'
import LoadingIcon from '@/Components/LoadingIcon.vue'

export default {
  components: {
    Podcast,
    LoadingIcon,
  },
  computed: {
    loading() {
      return false
    },
    podcasts() {
      return [
        {
          id: 1,
          imgSrc: './art/art-of-product.jpg',
          title: 'Art Of Product',
          author: 'Derrick Reimer & Ben Orenstein',
          favorited: false,
        },
        {
          id: 2,
          imgSrc: './art/bootstrapped-web.jpg',
          title: 'Bootstrapped Web',
          author: 'Brian Casel & Jordan Gal',
          favorited: true,
        },
        {
          id: 3,
          imgSrc: './art/hackers-incorporated.jpg',
          title: 'Hackers Incorporated',
          author: 'Adam Wathan & Ben Orenstein',
          favorited: false,
        },
        {
          id: 4,
          imgSrc: './art/laravel-news.jpg',
          title: 'Laravel News',
          author: 'Eric Barnes & Jack Fruh',
          favorited: false,
        },
        {
          id: 5,
          imgSrc: './art/mostly-technical.jpg',
          title: 'Mostly Technical',
          author: 'Ian Landsman & Aaron Francis',
          favorited: false,
        },
        {
          id: 6,
          imgSrc: './art/no-plans-to-merge.jpg',
          title: 'No Plans To Merge',
          author: 'Caleb Porzio & Daniel Coulbourne',
          favorited: true,
        },
        {
          id: 7,
          imgSrc: './art/out-of-beta.jpg',
          title: 'Out Of Beta',
          author: 'Matt Wensing & Peter Suhm',
          favorited: false,
        },
        {
          id: 8,
          imgSrc: './art/the-nathan-barry-show.jpg',
          title: 'The Nathan Barry Show',
          author: 'Nathan Barry',
          favorited: false,
        },
      ]
    },
  },
}
</script>
