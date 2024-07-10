<script setup lang="ts">
import sidebarItems from './sidebarItem'

const customizer = useCustomizerStore()
const sidebarMenu = shallowRef(sidebarItems)
</script>

<template>
    <v-navigation-drawer
        v-model="customizer.Sidebar_drawer"
        left
        elevation="0"
        rail-width="90"
        mobile-breakpoint="lg"
        width="279"
        app
        class="leftSidebar"
        :rail="customizer.mini_sidebar"
        expand-on-hover
    >
        <!---Logo part -->

        <div class="pa-5">
            <LayoutsLogo />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="scrollnavbar">
            <v-list aria-busy="true" class="px-2" aria-label="menu list">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu" :key="i">
                    <!---Item Sub Header -->
                    <LayoutsSidebarNavGroup v-if="item.header" :key="item.title" :item="item" />

                    <!---Item Divider -->
                    <v-divider v-else-if="item.divider" class="my-3" />
                    <!---If Has Child -->
                    <LayoutsSidebarNavCollapse v-else-if="item.children" class="leftPadding" :item="item" :level="0" />

                    <!---Single Item -->
                    <LayoutsSidebarNavItem v-else :item="item" />

                    <!---End Single Item -->
                </template>
            </v-list>
            <div class="pa-4" />
        </perfect-scrollbar>
    </v-navigation-drawer>
</template>
