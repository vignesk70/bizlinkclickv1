<script setup lang="ts">
const isOpen = ref(false);
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
    <nav class="bg-sky-900 shadow">
        <div class="container mx-auto px-6 py-6 md:py-0 flex justify-between items-center">
            <!-- <a href="/" class="text-xl font-semibold text-gray-200">BizLink</a> -->
            <NuxtLink to="/" class="text-xl font-semibold font-montserrat text-gray-200">BizLink</NuxtLink>
            <div class="flex-1 ml-10">

            </div>
            <div class="flex items-center space-x-1">
                <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 hidden md:block ">
                    <p class="text-left text-xs text-white font-montserrat">01</p>
                    <p class="text-left text-lg text-white font-montserrat">
                        <NuxtLink to="/features">Features</NuxtLink>
                    </p>
                </div>
                <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 hidden md:block">
                <p class="text-left text-xs text-white font-montserrat">02</p>
                <p class="text-left text-lg text-white font-montserrat">
                    <NuxtLink to="/pricing">Pricing</NuxtLink>
                </p>
            </div>
            <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 hidden md:block">
                <p class="text-left text-xs text-white font-montserrat">03</p>
                <p class="text-left text-lg text-white font-montserrat">
                    <NuxtLink to="/about">About Us</NuxtLink>
                </p>
            </div>
            <div class="p-5 transition-colors  hover:bg-sky-600 duration-300 hidden md:block ">
                <p class="text-left text-xs text-white font-montserrat">04</p>
                <p class="text-left text-lg text-white font-montserrat">
                    <NuxtLink to="/register">Register</NuxtLink>
                </p>
            </div>
            <div class="flex p-2 items-center hidden md:block">
                <UAvatar v-if="status === 'authenticated'" size="md" :src=data?.user.image alt="Avatar"
                    class="flex mx-auto  hover:bg-sky-600 duration-300" />
                <UIcon v-else name="i-heroicons-user-circle" class="flex mx-auto  h-10 w-10 bg-white" />
            </div>
           
                <button @click="isOpen = !isOpen" class="text-gray-200 hover:text-gray-200 md:hidden">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- mobile menu -->
        <div :class="isOpen ? 'block' : 'hidden'" class="md:hidden">
            <NuxtLink to="/features" class="block py-2 px-4 text-sm text-white">Features</NuxtLink>
            <NuxtLink to="/pricing" class="block py-2 px-4 text-sm text-white ">Pricing</NuxtLink>
            <NuxtLink to="/about" class="block py-2 px-4 text-sm text-white ">About Us</NuxtLink>
            <NuxtLink to="/register" class="block py-2 px-4 text-sm text-white ">Register</NuxtLink>
        </div>
    </nav>
</template>