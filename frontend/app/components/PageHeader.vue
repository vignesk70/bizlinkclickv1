<template>
<div class="flex flex-row justify-end w-full h-full bg-gray-300 p-4 ">
    <div class="lg:text-8xl md:text-6xl text-2xl font-extrabold">{{ pageheader.number }}</div>
    <div class="flex items-center px-1 sm:px-5 md:px-10 ">
        <h1 class="text-center md:font-bold lg:text-4xl md:text-2xl text-sm">{{pageheader.text}}</h1>
    </div>
</div>
</template>
<script setup>
    const props = defineProps({
            pageheader:{
                number:String,
                text:String }
    })
</script>