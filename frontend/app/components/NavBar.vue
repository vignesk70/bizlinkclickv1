<template>
    <div class="md:w-full rounded-t-lg bg-sky-900 ">
        <div class="flex justify-center ">
            <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 ">
                <NuxtLink to="/">
                    <img class="w-14 h-14" src="~/assets/images/iconbizlink.svg" alt="">
                </NuxtLink>
            </div>
            <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 ">
                <p class="text-left text-xs text-white">01</p>
                <p class="text-left text-lg text-white">
                    <NuxtLink to="/features">Features</NuxtLink>
                </p>
            </div>
            <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 ">
                <p class="text-left text-xs text-white">02</p>
                <p class="text-left text-lg text-white">
                    <NuxtLink to="/pricing">Pricing</NuxtLink>
                </p>
            </div>
            <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 ">
                <p class="text-left text-xs text-white">03</p>
                <p class="text-left text-lg text-white">
                    <NuxtLink to="/about">About Us</NuxtLink>
                </p>
            </div>
            <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 ">
                <p class="text-left text-xs text-white">04</p>
                <p class="text-left text-lg text-white">
                    <NuxtLink to="/register">Register</NuxtLink>
                </p>
            </div>
            <div class="flex p-2 items-center">
                <UAvatar v-if="status === 'authenticated'" size="md" :src=data?.user.image alt="Avatar"
                    class="flex mx-auto  hover:bg-sky-600 duration-300" />
                <UIcon v-else name="i-heroicons-user-circle" class="flex mx-auto  h-10 w-10 bg-white" />
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">

// const {status,data} = useAuth()
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