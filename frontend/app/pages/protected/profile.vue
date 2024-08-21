<template>
    Profile {{ status }}
</template>
<script setup lang="ts">

definePageMeta({
    middleware: 'auth'
})

const {
    status,
    data,
    lastRefreshedAt,
    getCsrfToken,
    getProviders,
    getSession,
    signIn,
    signOut,
} = useAuth()



</script>