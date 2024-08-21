<template>
    <div>
        <div class="w-80 md:w-[80%] mx-auto mt-4 rounded-lg  md:max-w-xl md:transition-all  overflow-clip shadow-lg dark:bg-slate-200 ">
            <div class=" md:flex md:space-x-4 p-4 md:p-0 md:justify-between overflow-clip">
                <div class="flex mx-auto justify-center md:ml-0 md:items-center ">
                    <img alt="this is" src="/images/profilepic.jpeg"
                        class="w-48 h-48 md:h-full md:rounded-none rounded-full object-cover">
                </div>
                <div class="flex flex-col p-4 justify-center">
                    <div class=" font-roboto font-bold text-2xl mb-3 text-black text-center">Tunjang Jaya Graftek</div>
                    <div class=" font-montserrat text-md md:text-xl text-slate-900 text-center font-medium">Vigneswaren
                        M Krishnamoorthy</div>
                    <div class=" font-montserrat text-xs md:text-base text-slate-700 text-center mb-4">Founder Director
                    </div>
                    <div class=" font-montserrat text-xs md:text-sm text-slate-700 text-center">+6019-6011148</div>
                    <div class=" font-montserrat text-xs md:text-sm text-slate-700 text-center">vignes_k@tunjangjaya.com
                    </div>
                    <div class="text-center mt-4">
                        <UButton color="blue">Add Contact</UButton>
                    </div>
                </div>
            </div>
        </div>
        <UButton @click="goback" class="flex mx-auto mt-4 text-center">Back</UButton>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'bizcard',
})

const route = useRouter()

function goback(){
    route.back()
}
</script>