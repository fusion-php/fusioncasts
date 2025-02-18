<?php

namespace Database\Seeders;

use App\Models\Podcast;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PodcastSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $podcasts = [[
            'id' => 1,
            'image' => '/art/art-of-product.jpg',
            'title' => 'Art Of Product',
            'author' => 'Derrick Reimer & Ben Orenstein',
            'favorited' => false,
        ], [
            'id' => 2,
            'image' => '/art/bootstrapped-web.jpg',
            'title' => 'Bootstrapped Web',
            'author' => 'Brian Casel & Jordan Gal',
            'favorited' => true,
        ], [
            'id' => 3,
            'image' => '/art/hackers-incorporated.jpg',
            'title' => 'Hackers Incorporated',
            'author' => 'Adam Wathan & Ben Orenstein',
            'favorited' => false,
        ], [
            'id' => 4,
            'image' => '/art/laravel-news.jpg',
            'title' => 'Laravel News',
            'author' => 'Eric Barnes & Jack Fruh',
            'favorited' => false,
        ], [
            'id' => 5,
            'image' => '/art/mostly-technical.jpg',
            'title' => 'Mostly Technical',
            'author' => 'Ian Landsman & Aaron Francis',
            'favorited' => false,
        ], [
            'id' => 6,
            'image' => '/art/no-plans-to-merge.jpg',
            'title' => 'No Plans To Merge',
            'author' => 'Caleb Porzio & Daniel Coulbourne',
            'favorited' => true,
        ], [
            'id' => 7,
            'image' => '/art/out-of-beta.jpg',
            'title' => 'Out Of Beta',
            'author' => 'Matt Wensing & Peter Suhm',
            'favorited' => false,
        ], [
            'id' => 8,
            'image' => '/art/the-nathan-barry-show.jpg',
            'title' => 'The Nathan Barry Show',
            'author' => 'Nathan Barry',
            'favorited' => false,
        ], [
            'id' => 9,
            'image' => '/art/syntax.jpg',
            'title' => 'Syntax',
            'author' => 'Wes Bos & Scott Tolinski',
            'favorited' => false,
        ]];

        foreach ($podcasts as $podcast) {
            Podcast::updateOrCreate([
                'id' => $podcast['id'],
            ], $podcast);
        }
    }
}
