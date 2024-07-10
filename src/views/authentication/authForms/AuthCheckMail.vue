<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const valid = ref(false)
const logform = ref()

const router = useRouter()

function validate() {
    logform.value.validate()
    if (logform.value) {
        router.push('/auth/login1')
    }
}
</script>

<template>
    <h3 class="text-h3">
        Hi, Check Your Mail
    </h3>
    <p class="text-lightText text-h6">
        We have sent a password recover instructions to your email.
    </p>
    <v-form ref="logform" v-model="valid" lazy-validation action="/auth/login" class="mt-7 loginForm" @submit.prevent="validate">
        <v-btn color="primary" block class="mt-2" variant="flat" rounded="md" size="large" :disabled="valid" type="submit">
            Sign in
        </v-btn>
    </v-form>
</template>
