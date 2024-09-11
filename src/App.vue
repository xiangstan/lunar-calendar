<script setup>
import { computed } from "vue"
import  { useAppStore } from '@/stores/app';
import FooterView from '@/components/static/FooterView.vue';
import HeaderView from '@/components/static/HeaderView.vue';

const appStore = useAppStore();

const isDarkMode = computed(() => {
  return appStore.isDarkMode
})
</script>

<template>
  <div class="min-h-screen flex flex-col" :class="{ 'dark': isDarkMode }">
    <HeaderView />
    <main class="flex-1 wrapper p-12 dark:bg-slate-700 transition-all duration-300">
      <RouterView />
    </main>
    <FooterView />
  </div>
</template>
