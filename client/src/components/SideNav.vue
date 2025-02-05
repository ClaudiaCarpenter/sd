<script>
export default {
  data() {
    return {
      navItems: {
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
    <div class="flex flex-col w-52">
        <!-- main nav -->
        <div class="flex flex-col flex-1">
          <nav class="px-2 py-4">
            <div v-for="item in navItems.main" v-bind:key="item.name">
                <router-link class="flex items-center px-4 py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                    :to="{ path: item.path }">{{ item.name }}</router-link>
            </div>
          </nav>
        </div>

        <div class="border-gray-200 dark:border-gray-800 border-t-1"></div>

        <!-- footer-like nav links -->
        <div class="flex flex-col overflow-y-auto border-gray-50 dark:border-gray-600 border-t-1">
          <!-- <hr />             -->
          <nav class="flex-1 px-2 py-4">
                <div v-for="item in navItems.other" v-bind:key="item.name">
                    <router-link class="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
                        :to="{ path: item.path }">{{ item.name }}</router-link>
                </div>
            </nav>
            <div class="px-6 pb-4 text-xs text-gray-400">
                 &copy; 2025 by sudo-dragon
            </div>
        </div>
      </div>
</template>