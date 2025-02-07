<php>

new class {
    public string $name;

    public function mount()
    {
        $this->name = strtoupper('Aaron');
    }
};

</php>
<template>
  Hello {{ name }}!
</template>