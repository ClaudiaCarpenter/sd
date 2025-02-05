<script>
import SideNav from '@/components/SideNav.vue';
import TopNav from '@/components/TopNav.vue';
export default {
  components: {
    SideNav,
    TopNav
  }
}
</script>

<template>
  <div class="flex flex-col h-screen w-screen bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">

    <!-- logo + home link -->
    <div class="bg-gray-50 dark:bg-gray-600 px-6.5 py-3">
      <TopNav></TopNav>
    </div>

    <div class="flex flex-row flex-1 bg-gray-100 dark:bg-gray-700">
      <SideNav></SideNav>

      <!-- Main content -->
      <div class="flex-1 overflow-y-auto bg-white dark:bg-gray-800">
        <router-view />
      </div>
    </div>


  </div>
</template>
