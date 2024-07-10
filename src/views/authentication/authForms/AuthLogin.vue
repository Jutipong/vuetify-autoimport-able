<script setup lang="ts">
import { ref } from 'vue'
import { Form } from 'vee-validate'
import SvgSprite from '@/components/shared/SvgSprite.vue'
import { useAuthStore } from '@/stores/auth'

const checkbox = ref(false)
const valid = ref(false)
const show1 = ref(false)
const password = ref('admin123')
const username = ref('info@phoenixcoded.co')
const passwordRules = ref([
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters',
])
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.[^\n\r@\u2028\u2029]*@.+\..+/.test(v) || 'E-mail must be valid'])

/* eslint-disable @typescript-eslint/no-explicit-any */
function validate(values: any, { setErrors }: any) {
    const authStore = useAuthStore()
    return authStore.login(username.value, password.value).catch(error => setErrors({ apiError: error }))
}
</script>

<template>
    <div class="d-flex justify-space-between align-center mt-4">
        <h3 class="text-h3 text-center mb-0">
            Login
        </h3>
        <router-link to="/auth/register1" class="text-primary text-decoration-none">
            Don't Have an account?
        </router-link>
    </div>
    <Form v-slot="{ errors, isSubmitting }" class="mt-7 loginForm" @submit="validate">
        <div class="mb-6">
            <v-label>Email Address</v-label>
            <v-text-field
                v-model="username"
                aria-label="email address"
                :rules="emailRules"
                class="mt-2"
                density="comfortable"
                required
                hide-details="auto"
                variant="outlined"
                color="primary"
            />
        </div>
        <div>
            <v-label>Password</v-label>
            <v-text-field
                v-model="password"
                aria-label="password"
                :rules="passwordRules"
                required
                variant="outlined"
                density="comfortable"
                color="primary"
                hide-details="auto"
                :type="show1 ? 'text' : 'password'"
                class="pwdInput mt-2"
            >
                <template #append-inner>
                    <v-btn color="secondary" aria-label="icon" icon rounded variant="text">
                        <SvgSprite v-if="show1 == false" name="custom-eye-invisible" style="width: 20px; height: 20px" @click="show1 = !show1" />
                        <SvgSprite v-if="show1 == true" name="custom-eye" style="width: 20px; height: 20px" @click="show1 = !show1" />
                    </v-btn>
                </template>
            </v-text-field>
        </div>

        <div class="d-flex align-center mt-4 mb-7 mb-sm-0">
            <v-checkbox
                v-model="checkbox"
                :rules="[(v: any) => !!v || 'You must agree to continue!']"
                label="Keep me sign in"
                required
                color="primary"
                class="ms-n2"
                hide-details
            />
            <div class="ml-auto">
                <router-link to="/auth/forgot-pwd1" class="text-darkText link-hover">
                    Forgot Password?
                </router-link>
            </div>
        </div>
        <v-btn
            color="primary"
            :loading="isSubmitting"
            block
            class="mt-5"
            variant="flat"
            size="large"
            rounded="md"
            :disabled="valid"
            type="submit"
        >
            Login
        </v-btn>
        <div v-if="errors.apiError" class="mt-2">
            <v-alert color="error">
                {{ errors.apiError }}
            </v-alert>
        </div>
    </Form>
</template>
