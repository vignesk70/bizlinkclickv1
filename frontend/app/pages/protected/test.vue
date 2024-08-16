<script setup>
const isOpen = ref(false)

definePageMeta({ 
    middleware: 'auth'
})

const pageheader = {
  number:"06",
  text:"Test Page"
}

const {  
    status,
    data,
    lastRefreshedAt,
    getCsrfToken,
    getProviders,
    getSession,
    signIn,
    signOut
} = useAuth()
</script>
<template>
  <div>
    <PageHeader :pageheader="pageheader" />
    <UButton label="Open" @click="isOpen = true" />
    <USlideover v-model="isOpen">
      <!-- Content -->
      <NavBarVertical />
    </USlideover>
  </div>
</template>