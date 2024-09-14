<template>
  <div v-if="isModalShow" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white dark:bg-gray-500 dark:text-slate-100 rounded-lg shadow-lg w-full p-7 relative sm:w-[80%] md:w-[60%] lg:w-[50%]">
      <button @click="close" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="border-double border-8 border-red-500 rounded-lg p-5">
        <div class="flex flex-col gap-5 md:flex-row items-start">
          <div class="flex flex-col pb-5 w-full md:w-64">
            <p class="text-lg">
              {{ getLongMonth }}
            </p>
            <div class="flex items-center justify-center text-9xl mb-3">
              {{ day }}
            </div>
            <p class="block w-full">
              {{ lunarDate }}
            </p>
          </div>
          <div class="border-t-2 border-red-300 md:border-t-0 pt-2 md:pt-0 w-full">
            <div class="flex flex-row gap-1 items-start mb-4">
              <div class="flex items-center font-bold self-start py-1 px-2 w-16">
                吉神
              </div>
              <div v-if="showGods.good.length > 0" class="flex flex-row flex-wrap gap-1 items-start">
                <router-link
                  v-for="jg in showGods.good"
                  :to="`/shen-sha/${jg}`"
                  :key="jg"
                  class="cursor-pointer p-1 select-none hover:text-green-500 hover:font-bold"
                  target="_blank"
                >
                  {{ jg }}
                </router-link>
              </div>
            </div>
            <div class="flex flex-row gap-1 items-start mb-4">
              <div class="flex items-center font-bold self-start py-1 px-2 w-16">
                凶神
              </div>
              <div v-if="showGods.bad.length > 0" class="flex flex-row flex-wrap gap-1 items-start">
                <router-link
                  v-for="bg in showGods.bad"
                  :to="`/shen-sha/${bg}`"
                  :key="bg"
                  class="cursor-pointer p-1 select-none hover:text-red-500 hover:font-bold"
                  target="_blank"
                >
                  {{ bg }}
                </router-link>
              </div>
            </div>
            <div class="flex flex-row gap-1 items-start mb-4">
              <div class="flex items-center font-bold self-start py-1 px-2 w-16">
                吉凶
              </div>
              <div v-if="showGods.both.length > 0" class="flex flex-row flex-wrap gap-1 items-start">
                <router-link
                  v-for="dg in showGods.both"
                  :to="`/shen-sha/${dg}`"
                  :key="dg"
                  class="cursor-pointer p-1 hover:text-amber-500 hover:font-bold"
                  target="_blank"
                >
                  {{ dg }}
                </router-link>
              </div>
            </div>
            <div v-if="showGods.undefined.length > 0" class="flex flex-row gap-1 items-start mb-4">
              <div class="flex items-center font-bold self-start py-1 px-2">
                Undefined
              </div>
              <div class="flex flex-row flex-wrap gap-1 items-start">
                <span v-for="ug in showGods.undefined" :key="ug" class="p-1">
                  {{ ug }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-1 items-start mb-4">
          <div class="flex items-center font-bold self-start py-1 px-2 bg-green-300 rounded-[50%]">
            宜
          </div>
          <div v-if="showLuck.length > 0" class="flex flex-row flex-wrap gap-1 items-start">
            <span v-for="l in showLuck" :key="l" class="rounded hover:bg-green-300 p-1">
              {{ l }}
            </span>
          </div>
          <div v-else class="items-start p-1">
            无
          </div>
        </div>
        <div class="flex flex-row gap-1 items-start mb-4">
          <div class="flex items-center font-bold self-start py-1 px-2 bg-red-400 text-slate-100 rounded-[50%]">
            忌
          </div>
          <div v-if="showBads.length > 0" class="flex flex-row flex-wrap gap-1 items-start">
            <span v-for="b in showBads" :key="b" class="rounded hover:bg-red-400 hover:text-slate-100 p-1">
              {{ b }}
            </span>
          </div>
          <div v-else class="items-start p-1">
            无
          </div>
        </div>
        <div class="flex flex-row gap-1 items-start pt-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <p>
            点击神煞查看详细介绍
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import  { useAppStore } from '@/stores/app';
import { SolarDay } from 'tyme4ts';
import { benevolentShensha, maleficShensha, dualShensha } from '@/utils/shensha';

const goodShenshaSet = new Set(benevolentShensha.map(item => Object.keys(item)[0]));
const badShenshaSet = new Set(maleficShensha.map(item => Object.keys(item)[0]));
const bothShenshaSet = new Set(dualShensha.map(item => Object.keys(item)[0]));

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

const lunarDate = ref('');
const getAllGods = ref('');
const getAllLuck = ref('');
const getBads = ref('');

const getLongMonth = computed(() => {
  let temp = 'undefined';
  if (props.year > 0 && props.month >= 0 && props.day > 0) {
    const options = { year: 'numeric', month: 'long' };
    const newDate = new Date(`${props.year}/${props.month}/${props.day}`)
    const formattedDate = newDate.toLocaleDateString(undefined, options);
    const [month, year] = formattedDate.split(' ');
    temp = `${month}, ${year}`;
  }
  return temp;
})

const showBads = computed(() => {
  if (getBads.value.length < 1) {
    return [];
  }
  else {
    const temp = getBads.value.split(',');
    return temp;
  }
})
const showGods = computed(() => {
  const gods = {
    bad: [],
    good: [],
    both: [],
    undefined: []
  };
  if (getAllGods.value.length > 0) {
    const temp = getAllGods.value.split(',');
    for (const g of temp) {
      if (goodShenshaSet.has(g)) {
        gods.good.push(g);
      } else if (badShenshaSet.has(g)) {
        gods.bad.push(g);
      } else if (bothShenshaSet.has(g)) {
        gods.both.push(g);
      }
      else {
        gods.undefined.push(g)
      }
    }
  }
  return gods;
})
const showLuck = computed(() => {
  if (getAllLuck.value.length < 1) {
    return [];
  }
  else {
    const temp = getAllLuck.value.split(',');
    return temp;
  }
})

onMounted(() => {
  const solarDate = SolarDay.fromYmd(props.year, props.month, props.day);
  lunarDate.value = solarDate.getLunarDay();
  getAllGods.value = `${lunarDate.value.getGods()}`;
  getAllLuck.value = `${lunarDate.value.getRecommends()}`;
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
