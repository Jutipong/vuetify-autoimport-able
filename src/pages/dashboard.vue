<script setup lang="ts">
import ChartCards from '@/views/widgets/chart/components/ChartCards.vue'
import RepeatCustomer from '@/views/widgets/chart/components/RepeatCustomer.vue'
import ProjectOverview from '@/views/widgets/chart/components/ProjectOverview.vue'
import UserCard from '@/views/widgets/statistics/components/UserCard.vue'
import TransactionCard from '@/views/widgets/data/components/TransactionCard.vue'
import TotalIncome from '@/views/widgets/chart/components/TotalIncome.vue'
</script>

<template>
    <!-- -------------------------------------------------------------------- -->
    <!-- welcome banner -->
    <!-- -------------------------------------------------------------------- -->
    <v-row class="my-0">
        <v-col cols="12">
            <DashboardsWelcomeBanner />
        </v-col>
    </v-row>

    <!-- -------------------------------------------------------------------- -->
    <!-- Chart widgets -->
    <!-- -------------------------------------------------------------------- -->
    <ChartCards />

    <v-row class="mb-0">
        <v-col cols="12" xl="9" md="8">
            <v-row>
                <!-- -------------------------------------------------------------------- -->
                <!-- Repeat customer -->
                <!-- -------------------------------------------------------------------- -->
                <v-col cols="12">
                    <RepeatCustomer />
                </v-col>

                <!-- -------------------------------------------------------------------- -->
                <!-- Project overview -->
                <!-- -------------------------------------------------------------------- -->
                <v-col cols="12">
                    <ProjectOverview />
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="12" xl="3" md="4">
            <v-row>
                <!-- -------------------------------------------------------------------- -->
                <!-- Project -->
                <!-- -------------------------------------------------------------------- -->
                <v-col cols="12">
                    <DashboardsProjectCard />
                </v-col>

                <!-- -------------------------------------------------------------------- -->
                <!-- User card -->
                <!-- -------------------------------------------------------------------- -->
                <v-col cols="12">
                    <UserCard />
                </v-col>
            </v-row>
        </v-col>
    </v-row>

    <v-row>
        <!-- -------------------------------------------------------------------- -->
        <!-- Transactions -->
        <!-- -------------------------------------------------------------------- -->
        <v-col cols="12" md="6">
            <TransactionCard />
        </v-col>

        <!-- -------------------------------------------------------------------- -->
        <!-- Total income -->
        <!-- -------------------------------------------------------------------- -->
        <v-col cols="12" md="6">
            <TotalIncome />
        </v-col>
    </v-row>
</template>
