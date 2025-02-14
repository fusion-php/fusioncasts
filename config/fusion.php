<?php

use Fusion\Enums\Frontend;

return [

    /*
     * The frontend framework used in this project.
     * Currently only Vue is supported.
     */
    'frontend' => Frontend::Vue,

    /*
     * The base class to use for generated page classes.
     * It should be, or extend, FusionPage.
     */
    'base_page' => \Fusion\FusionPage::class,
];
