<template>
    <UCard class="shadow-lg m-4">
                <template #header>
                  <div class="font-roboto">{{header}}</div> 
                </template>
                <h1 class="font-bold font-barlow text-2xl">{{ data.body.title }}</h1>
                <p class="text-sm font-montserrat text-gray-600 mt-3">{{data.body.content}}</p>
                <template #footer v-if="data.body.pricecurrency">
                    <div class="flex flex-row" >
                        <div class="text-sm mr-2  inline-block align-text-bottom">{{data.body.pricecurrency}}</div>
                        <div class="text-2xl mr-2 inline-block align-text-bottom">{{data.body.priceamount}}</div>
                        <div class="text-sm inline-block align-text-bottom">/{{data.body.priceduration}}</div>
                    </div>
                    <UButton class="w-full mt-4" color="blue" block label="Buy"></UButton>
                </template>
            </UCard>
</template>
<script  setup>
const props = defineProps({
    data:Object,
    header:String,
    
})
</script>

