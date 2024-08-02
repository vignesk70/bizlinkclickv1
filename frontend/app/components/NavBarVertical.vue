<template>
    <div class="md:w-full rounded-t-lg bg-sky-500 ">
            <div class="flex justify-center flex-col ">
                <div class="p-5 hover:bg-sky-700">
                    <NuxtLink to="/">
                    <img class="w-14 h-14" src="~/assets/images/iconbizlink.svg" alt="">
                </NuxtLink>
                </div>
                <div class="p-5 hover:bg-sky-700">
                    <p class="text-left text-xs text-white">01</p>
                    <p class="text-left text-lg text-white"><NuxtLink to="/features" @click="$emit('hide')">Features</NuxtLink> </p>
                </div>
                <div class="p-5 hover:bg-sky-700">
                    <p class="text-left text-xs text-white">02</p>
                    <p class="text-left text-lg text-white"><NuxtLink to="/pricing" @click="$emit('hide')">Pricing</NuxtLink></p>
                </div>
                <div class="p-5 hover:bg-sky-700">
                    <p class="text-left text-xs text-white">03</p>
                    <p class="text-left text-lg text-white"><NuxtLink to="/about" @click="$emit('hide')">About Us</NuxtLink></p>
                </div>
                <div class="p-5 hover:bg-sky-700">
                    <p class="text-left text-xs text-white">04</p>
                    <p class="text-left text-lg text-white"><NuxtLink to="/register" @click="$emit('hide')">Register</NuxtLink></p>
                </div>
            </div>
        </div>
</template>
