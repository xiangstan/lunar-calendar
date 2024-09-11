<template>
  <div v-if="isModalShow" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg shadow-lg w-full p-6 relative sm:w-[80%] md:w-[60%] lg:w-[50%]">
      <button @click="close" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <div>
        <p>{{ lunarDate }}</p>
        <div class="flex flex-row gap-1 items-start mb-4">
          <div class="flex items-center font-bold self-start py-1 pr-1">
            Gods:
          </div>
          <div v-if="showGods.length > 0" class="flex flex-row flex-wrap gap-1 items-start">
            <span v-for="g in showGods" :key="g" class="bg-amber-400 p-1">
              {{ g }}
            </span>
          </div>
        </div>
        <p>Luck: {{ getLuck }}</p>
        <p>Avoid: {{ getBads }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import  { useAppStore } from '@/stores/app';
import { SolarDay } from 'tyme4ts';

const appStore = useAppStore();

const props = defineProps({
  year: {
    type: Number,
    default: 0
  },
  month: {
    type: Number,
    default: 0
  },
  day: {
    type: Number,
    default: 0
  }
});

console.log(props);

const lunarDate = ref('');
const getGods = ref('');
const getLuck = ref('');
const getBads = ref('');

const showGods = computed(() => {
  if (getGods.value.length < 1) {
    return [];
  }
  else {
    const temp = getGods.value.split(',');
    return temp;
  }
})

onMounted(() => {
  const solarDate = SolarDay.fromYmd(props.year, props.month, props.day);
  console.log(solarDate.toString())
  lunarDate.value = solarDate.getLunarDay();
  console.log(lunarDate.value.toString())
  getGods.value = `${lunarDate.value.getGods()}`;
  getLuck.value = `${lunarDate.value.getRecommends()}`;
  getBads.value = `${lunarDate.value.getAvoids()}`;
})

const isModalShow = computed(() => {
  return appStore.isShown.calendarModal;
})

const close = () => {
  appStore.updateShown({
    cat: 'calendarModal',
    value: false
  })
}
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
