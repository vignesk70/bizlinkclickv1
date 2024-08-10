<template>
   <PageHeader :pageheader="pageheader" />
  <!-- Latitude: {{ coords.latitude }}
  Longitude: {{ coords.longitude }}
  Accuracy: {{ coords.accuracy }}
  Located At: {{ locatedAt }}
 <div v-if="error">{{ error.message }}</div> 
<div>
  Show locs 
  <p v-for="items in locs"> {{ items.latitude }} {{items.longitude}} {{items.accuracy }}</p>
</div> -->

</template>

<script setup>
import { useGeolocation } from '@vueuse/core'
const locs = ref([])
const { coords, locatedAt, error, resume, pause } = useGeolocation()

const pageheader = {
  number:"03",
  text:"About Us"
}

watch (coords, () => {
  console.log("time",coords.value)
  locs.value.push(coords.value)
})

</script>