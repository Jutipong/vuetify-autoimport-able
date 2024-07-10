<script setup lang="ts">
const customizer = useCustomizerStore()
const priority = ref(customizer.setHorizontalLayout ? 0 : 0)
watch(priority, (newPriority) => {
    // yes, console.log() is a side effect
    priority.value = newPriority
})
</script>

<template>
    <v-app-bar elevation="0" :priority="priority" height="74" class="px-sm-10 px-5">
        <v-btn
            class="hidden-md-and-down mr-5 ml-0"
            color="secondary"
            icon
            aria-label="sidebar button"
            rounded="sm"
            variant="tonal"
            @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
        >
            <SharedSvgSprite name="custom-menu-outline" style="width: 24px; height: 24px" />
        </v-btn>
        <v-btn
            class="hidden-lg-and-up text-secondary"
            color="darkText"
            icon
            rounded="sm"
            variant="text"
            size="small"
            @click.stop="customizer.SET_SIDEBAR_DRAWER"
        >
            <SharedSvgSprite name="custom-menu-outline" style="width: 24px; height: 24px" />
        </v-btn>

        <!-- search mobile -->
        <v-menu :close-on-content-click="false" class="hidden-lg-and-up" offset="10, 0">
            <template #activator="{ props }">
                <v-btn class="hidden-lg-and-up ml-1" color="secondary" icon rounded="sm" variant="text" size="small" v-bind="props">
                    <div class="text-lightText d-flex align-center">
                        <SharedSvgSprite name="custom-search" style="width: 16px; height: 16px" />
                    </div>
                </v-btn>
            </template>
            <v-sheet class="search-sheet v-col-12 pa-0" elevation="24" width="320" rounded="md">
                <v-text-field persistent-placeholder placeholder="Search here.." rounded="md" color="primary" variant="solo" hide-details>
                    <template #prepend-inner>
                        <div class="text-lightText d-flex align-center">
                            <SharedSvgSprite name="custom-search" style="width: 16px; height: 16px" />
                        </div>
                    </template>
                </v-text-field>
            </v-sheet>
        </v-menu>

        <!-- ---------------------------------------------- -->
        <!-- Search part -->
        <!-- ---------------------------------------------- -->
        <!-- <v-sheet color="transparent" class="d-none d-lg-block" width="224">
            <Searchbar />
        </v-sheet> -->

        <!---/Search part -->

        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!---right part -->
        <!-- ---------------------------------------------- -->

        <!-- ---------------------------------------------- -->
        <!-- Notification -->
        <!-- ---------------------------------------------- -->
        <!-- <NotificationDD /> -->
        <LayoutsHeaderNotification />

        <!-- ---------------------------------------------- -->
        <!-- User Profile -->
        <!-- ---------------------------------------------- -->
        <v-menu :close-on-content-click="false" offset="8, 0">
            <template #activator="{ props }">
                <v-btn class="profileBtn mr-0" aria-label="profile" variant="text" rounded="circle" icon v-bind="props">
                    <v-avatar class="py-2" size="40" rounded="circle">
                        <img src="@/assets/images/users/avatar-6.png" class="rounded-circle" alt="profile">
                    </v-avatar>
                </v-btn>
            </template>
            <v-sheet rounded="md" width="290">
                <!-- <ProfileDD /> -->
                <LayoutsHeaderProfile />
            </v-sheet>
        </v-menu>
    </v-app-bar>
</template>
