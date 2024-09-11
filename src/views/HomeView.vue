<template>
  <div>
    <div class="max-w-5xl mx-auto p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-500 rounded-lg shadow-md">
      <div class="flex items-center justify-between mb-4">
        <button class="px-4 py-2 text-white bg-slate-500 rounded hover:bg-slate-600" @click="gotoToday">
          Today
        </button>
        <h1 class="text-xl font-semibold dark:text-gray-200">
          {{ monthYear }}
        </h1>
        <div class="flex gap-1">
          <button @click="changeMonth('prev')" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Previous
          </button>
          <button @click="changeMonth('next')" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
      <div class="grid grid-cols-7 gap-1">
        <div
          v-for="day in daysOfWeek"
          :key="day"
          class="text-center font-medium text-gray-700 bg-gray-200 dark:bg-slate-400 dark:text-gray-100 px-2 py-4 rounded transition-all duration-300"
        >
          {{ day }}
        </div>
        <div
          v-for="day in daysInMonth"
          :key="day.date"
          class="transition-all duration-300"
          :class="['text-center', day.empty ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-slate-600 dark:text-gray-100']"
        >
          <a
            class="cursor-pointer block w-full h-full px-2 py-4 hover:font-bold rounded transition-all duration-300"
            :class="{'bg-slate-100 dark:bg-slate-500 text-blue-800 dark:text-blue-200 underline': checkToday(day.day)}"
            @click="openModal"
            :data-day="day.day"
          >
            {{ day.day }}
          </a>
        </div>
      </div>
    </div>
    <DetailView v-if="isModalShow" :year="getYear" :month="getMonth" :day="getDay" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import  { useAppStore } from '@/stores/app';
import DetailView from './calendar/DetailView.vue';

const appStore = useAppStore();

const isToday = ref(new Date());
const getDay = ref(0);

const isModalShow = computed(() => {
  return appStore.isShown.calendarModal;
})

const getMonth = computed(() => {
  return isToday.value.getMonth() + 1;
})
const getYear = computed(() => {
  return isToday.value.getFullYear();
})
const monthYear = computed(() => {
  const options = { year: 'numeric', month: 'long' };
  return isToday.value.toLocaleDateString(undefined, options);
})
const daysOfWeek = computed(() => {
  const days = [];
  const date = new Date();
  date.setDate(1);
  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
  }
  for (let i = 0; i < 7; i++) {
    days.push(date.toLocaleDateString(undefined, { weekday: 'short' }));
    date.setDate(date.getDate() + 1);
  }
  return days;
});
const daysInMonth = computed(() => {
  const date = new Date(isToday.value.getFullYear(), isToday.value.getMonth(), 1);
  const days = [];
  const firstDay = date.getDay();
  const lastDate = new Date(isToday.value.getFullYear(), isToday.value.getMonth() + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    days.push({ day: '', empty: true });
  }
  for (let i = 1; i <= lastDate; i++) {
    days.push({ day: i, date: new Date(isToday.value.getFullYear(), isToday.value.getMonth(), i) });
  }
  return days;
});

const changeMonth = (action) => {
  const date = new Date(isToday.value);
  if (action === 'prev') {
    date.setMonth(date.getMonth() - 1);
  }
  else {
    date.setMonth(date.getMonth() + 1);
  }
  isToday.value = date;
}

const checkToday = (day) => {
  const todayYear = isToday.value.getFullYear();
  const todayMonth = isToday.value.getMonth();
  const todayDay = isToday.value.getDate();
  // Create a date from getYear, getMonth, and the provided day
  const dateToCheck = new Date(`${getYear.value}/${getMonth.value}/${day}`);
  const checkYear = dateToCheck.getFullYear();
  const checkMonth = dateToCheck.getMonth();
  const checkDay = dateToCheck.getDate();
  // Compare the year, month, and day
  return todayYear === checkYear && todayMonth === checkMonth && todayDay === checkDay;
}

const gotoToday = () => {
  isToday.value = new Date();
}

const openModal = (e) => {
  getDay.value = parseInt(e.currentTarget.dataset.day);
  appStore.updateShown({
    cat: 'calendarModal',
    value: true
  })
}

</script>