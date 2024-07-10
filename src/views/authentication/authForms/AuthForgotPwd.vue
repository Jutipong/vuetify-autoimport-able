<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const valid = ref(false)
const logform = ref()
const email = ref('')
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.[^\n\r@\u2028\u2029]*@.+\..+/.test(v) || 'E-mail must be valid'])

const router = useRouter()

function validate() {
    logform.value.validate()
    if (logform.value) {
        router.push('/starter')
    }
}
</script>

<template>
    <v-form ref="logform" v-model="valid" lazy-validation action="/starter" class="mt-7 loginForm" @submit.prevent="validate">
        <v-label>Email address</v-label>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            placeholder="Enter email address"
            class="mt-2 mb-6"
            required
            density="comfortable"
            hide-details="auto"
            variant="outlined"
            color="primary"
        />

        <h6 class="text-caption">
            Do not forgot to check SPAM box.
        </h6>
        <v-btn color="primary" block class="mt-2" variant="flat" size="large" rounded="md" :disabled="valid" type="submit">
            Send Password Reset Email
        </v-btn>
    </v-form>
</template>
