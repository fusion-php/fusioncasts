<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Podcast extends Model
{
    protected $guarded = [];

    protected $casts = [
        'favorited' => 'boolean',
    ];

    public function toggleFavorite()
    {
        $this->update([
            'favorited' => !$this->favorited
        ]);

        return $this->favorited;
    }
}
