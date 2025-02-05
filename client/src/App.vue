<script>
import SideNav from '@/components/SideNav.vue';
export default {
  components: {
    SideNav
  }
}
</script>

<template>
  <div class="flex flex-col h-screen w-screen bg-gray-800">

    <!-- logo + home link -->
    <div class="flex-none bg-gray-600 px-6.5 py-3">
      <img class="h-8" src="/sd-logo-dark.svg">
    </div>

    <div class="flex flex-row flex-1">
      <!-- sidebar -->
      <SideNav></SideNav>

      <!-- Main content -->
      <div class="flex-1 overflow-y-auto bg-gray-800 text-gray-200">
        <router-view />
      </div>
    </div>


  </div>
</template>
