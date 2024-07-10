<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({ name: String })

const spritePath = ref<string | null>(null)

onMounted(async () => {
    try {
        spritePath.value = `${await import.meta.env.BASE_URL}assets/svg/sprite.svg`
    }
    catch (error) {
        console.error('Error loading SVG sprite:', error)
    }
})
</script>

<template>
    <svg class="pc-icon">
        <use :xlink:href="`${spritePath}#${props.name}`" />
    </svg>
</template>
