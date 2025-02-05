<script>
//import { DarkToggle } from '../components/DarkToggle';
import Home from './pages/Home.vue';
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
  <div class="flex flex-col h-screen w-screen bg-gray-800">

    <!-- logo + home link -->
    <div class="flex-none bg-gray-600 px-6.5 py-3">
        <img class="h-8" src="/sd-logo-dark.svg">
    </div>

    <div class="flex flex-row flex-1">
      <!-- sidebar -->
      <div class="flex flex-col w-52 bg-gray-600">
        <!-- main nav -->
        <div class="flex flex-col">
          <nav class="px-2 py-4 bg-gray-700 border-gray-600 border-t-1">
            <div v-for="item in nav.main" v-bind:key="item.name">
                <router-link class="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700"
                    :to="{ path: item.path }">{{ item.name }}</router-link>
            </div>
          </nav>
        </div>

        <!-- nav spacer-->
        <div class="flex-1 bg-gray-700 border-gray-800 border-b-1"> </div>

        <!-- footer-like nav links -->
        <div class="flex flex-col overflow-y-auto border-gray-600 border-t-1">
            <nav class="flex-1 px-2 py-4 bg-gray-700">
                <div v-for="item in nav.other" v-bind:key="item.name">
                    <router-link class="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700"
                        :to="{ path: item.path }">{{ item.name }}</router-link>
                </div>
            </nav>
            <div class="px-6 pb-4 bg-gray-700 text-xs text-gray-400">
                &copy; 2025 by sudo-dragon
                <!-- <DarkToggle /> -->
            </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="flex-1 overflow-y-auto bg-gray-800 text-gray-200">
        <router-view />
      </div>
  </div>

  
  </div>
</template>


