<script setup>
import { useDraggable , useStorage} from '@vueuse/core'
const isOpen = ref(false)
const el = ref(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x:40, y:40 }
})

const storeposition = useStorage('locstore',{x:x,y:y})


</script>
<template>
   
    <div ref="el" :style="style" class=" fixed top-10 left-10 z-50" aria-label="Click to go to menu">
        <UTooltip text="Drag to move" >
        <UButton class="bg-blue-500 rounded-full h-14 w-14 align-center justify-center  shadow-lg shadow-blue-950 hover:bg-red-500" @click="isOpen = true" icon="i-heroicons-bars-3" />
    </UTooltip>
        <USlideover v-model="isOpen">
            <!-- Content -->
            <NavBarVertical @hide="isOpen=false"/>
        </USlideover>
    </div>

</template>
