<script setup lang="ts">
import VerticalSidebarVue from '@components/layouts/sidebar/index.vue'
import VerticalHeaderVue from '@components/layouts/header/index.vue'
import FooterPanel from '@components/layouts/footer/index.vue'
import LoaderWrapper from './LoaderWrapper.vue'

// import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue'
// import VerticalHeaderVue from './vertical-header/VerticalHeader.vue'
// import FooterPanel from './footer/FooterPanel.vue'

const customizer = useCustomizerStore()
</script>

<template>
    <v-locale-provider>
        <v-app
            :theme="customizer.actTheme"
            :class="[
                customizer.actTheme,
                customizer.fontTheme,
                customizer.mini_sidebar ? 'mini-sidebar' : '',
                customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
                customizer.inputBg ? 'inputWithbg' : '',
            ]"
        >
            <VerticalSidebarVue />
            <VerticalHeaderVue />

            <v-main class="page-wrapper">
                <v-container fluid>
                    <div>
                        <!-- Loader start -->
                        <LoaderWrapper />
                        <!-- Loader end -->
                        <RouterView />
                    </div>
                </v-container>
                <v-container fluid class="pt-0">
                    <div>
                        <FooterPanel />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
