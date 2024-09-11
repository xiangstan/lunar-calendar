<template>
  <header>
    <nav id="top-nav-bar" class="dark:bg-slate-800 dark:text-slate-100 border-b-2 dark:border-slate-500 w-full transition-all duration-300 z-10">
      <div>
        <div class="flex items-center justify-between">
          <!-- logo -->
          <div class="flex items-center justify-start gap-10">
            <!-- <div v-if="isInternal" id="hamburger-icon" class="hamburger px-3 py-4 cursor-pointer" :class="isAsideShow ? 'is-active' : ''" @click="toggleHamburger">
              <span class="line bg-gray-700 dark:bg-slate-100"></span>
              <span class="line bg-gray-700 dark:bg-slate-100"></span>
              <span class="line bg-gray-700 dark:bg-slate-100"></span>
            </div> -->
            <a href="#" class="flex items-center py-5 px-2 text-gray-700">
              <img src="https://d1ex66uhwrtho1.cloudfront.net/img/outraverse-logo.png" class="w-6 h-6 mr-1 text-blue-400" alt="Outraverse Logo" />
              <span class="font-bold">Outraverse</span>
            </a>
          </div>

          <!-- secondary nav -->
          <div class="flex items-center space-x-3 pr-3">
            <a class="cursor-pointer" @click="toggleDarkMode">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <title>{{ isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode' }}</title>
                <path v-if="isDarkMode" stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </a>

            <!-- <div class="dropdown inline-block pr-3 relative z-10">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <title>Language Selector</title>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
              </a>
            </div> -->

            <!-- <div class="flex items-center space-x-1 pr-3">
              <a class="cursor-pointer" @click="toggleLoginForm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
              </a>
            </div> -->
            
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import  { useAppStore } from '@/stores/app';

const appStore = useAppStore();

const isDarkMode = computed(() => {
  return appStore.isDarkMode;
})

const toggleDarkMode = () => {
  appStore.setDarkMode(!isDarkMode.value);
}
</script>