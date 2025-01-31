<script>
export default {
  data() {
    return {
      nav: {
        main: [
          { name: 'Games', path: '/games' },
          { name: 'Tokens', path: '/tokens' },
          { name: 'Characters', path: '/characters' },
          { name: 'News', path: '/news' },
          { name: 'Players', path: '/players' }
        ],

        other: [
          { name: 'About', path: '/about' },
          { name: 'Privacy', path: '/privacy' },
          { name: 'Terms', path: '/terms' },
          { name: 'Colors (dev only)', path: '/colors' }
        ]
      }
    }
  }
}
</script>

<template>
  <div class="flex h-screen bg-gray-100">

    <!-- sidebar -->
    <div class="hidden md:flex flex-col w-64 bg-gray-600">

      <!-- logo + home link -->
      <div class="flex items-center justify-center h-16 bg-gray-700 px-10 border-gray-800 border-b-1">
        <img src="/sd-logo-dark.svg">
      </div>

      <!-- main nav -->
      <div class="flex flex-col">
        <nav class="px-2 py-4 bg-gray-700">
          <div v-for="item in nav.main" v-bind:key="item.name">
            <router-link class="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700"
              :to="{ path: item.path }">{{ item.name }}</router-link>
          </div>
        </nav>
      </div>

      <!-- nav spacer-->
      <div class="flex-1 bg-gray-700">
      </div>

      <!-- "footer-worthy" nav -->
      <div class="flex flex-col overflow-y-auto border-gray-800 border-t-1">
        <nav class="flex-1 px-2 py-4 bg-gray-700">
          <div v-for="item in nav.other" v-bind:key="item.name">
            <router-link class="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700"
              :to="{ path: item.path }">{{ item.name }}</router-link>
          </div>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex flex-col flex-1 overflow-y-auto bg-gray-800">
      <router-view />
    </div>


  </div>
</template>
