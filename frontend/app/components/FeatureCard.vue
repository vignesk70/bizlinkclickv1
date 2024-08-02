<template>
    <UCard class="shadow-lg">
                <template #header>
                   {{header}}
                </template>
                <h1 class="font-bold text-xl">{{ data.body.title }}</h1>
                <p class="text-sm text-gray-600 mt-3">{{data.body.content}}</p>
                <template #footer>
                    <div class="flex flex-row">
                        <div class="text-sm mr-2  inline-block align-text-bottom">{{data.body.pricecurrency}}</div>
                        <div class="text-2xl mr-2 inline-block align-text-bottom">{{data.body.priceamount}}</div>
                        <div class="text-sm inline-block align-text-bottom">/{{data.body.priceduration}}</div>
                    </div>
                </template>
            </UCard>
</template>
<script  setup>
const props = defineProps({
    data:Object,
    header:String,
    
})
</script>

