<script setup>
const isOpen = ref(false)
</script>
<template>
  <div>
    <UButton label="Open" @click="isOpen = true" />
    <USlideover v-model="isOpen">
      <!-- Content -->
      <NavBarVertical />
    </USlideover>
  </div>
</template>