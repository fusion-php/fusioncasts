<?php

use Fusion\Enums\Frontend;

return [

    /*
     * The frontend framework used in this project.
     * Currently only Vue is supported.
     */
    'frontend' => Frontend::Vue,

    'paths' => [
        /*
         * The directory to use for generated files.
         */
        'storage' => storage_path('fusion'),

        /*
         * The root directory where all your JavaScript lives.
         */
        'js' => resource_path('js'),
    ],

    /*
     * The base class to use for generated page classes.
     * It should be, or extend, FusionPage.
     */
    'base_page' => \Fusion\FusionPage::class,
];
