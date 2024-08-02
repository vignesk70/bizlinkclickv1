<template>
<div class="flex flex-row justify-end w-full h-full bg-gray-300 p-4 ">
    <div class="text-8xl font-extrabold">{{ pageheader.number }}</div>
    <div class="flex items-center px-1 md:px-10">
        <h1 class="text-center font-bold text-4xl">{{pageheader.text}}</h1>
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