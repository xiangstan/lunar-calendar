<template>
  <div class="dark:text-slate-300">
    <section class="mb-5">
      <h3 class="text-2xl mb-3">吉神</h3>
      <div>
        <div v-for="(i, idx) in benevolent" :key="idx">
          <div
            v-for="([key, value]) in Object.entries(i)"
            :key="key"
            :id="key"
            class="p-2"
            :class="{ 'bg-amber-300 dark:bg-amber-700': key === godId }"
          >
            <strong>{{ key }}</strong>: {{ value }}
        </div>
          <!-- {{ b }}: {{ value }} - {{ idx }} -->
        </div>
      </div>
    </section>
    <section class="mb-5">
      <h3 class="text-2xl mb-3">凶神</h3>
      <div>
        <div v-for="(i, idx) in malefic" :key="idx">
          <div
            v-for="([key, value]) in Object.entries(i)"
            :key="key"
            :id="key"
            class="p-2"
            :class="{ 'bg-amber-300 dark:bg-amber-700': key === godId }"
          >
            <strong>{{ key }}</strong>: {{ value }}
        </div>
          <!-- {{ b }}: {{ value }} - {{ idx }} -->
        </div>
      </div>
    </section>
    <section class="mb-5">
      <h3 class="text-2xl mb-3">亦吉亦凶之神</h3>
      <div>
        <div v-for="(i, idx) in dual" :key="idx">
          <div
            v-for="([key, value]) in Object.entries(i)"
            :key="key"
            :id="key"
            class="p-2"
            :class="{ 'bg-amber-300 dark:bg-amber-700': key === godId }"
          >
            <strong>{{ key }}</strong>: {{ value }}
        </div>
          <!-- {{ b }}: {{ value }} - {{ idx }} -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { benevolentShensha, maleficShensha, dualShensha } from '@/utils/shensha';

const route = useRoute();
const godId = route.params.id;
console.log(godId);

const allShensha = [...benevolentShensha, ...maleficShensha, ...dualShensha];
console.log(allShensha);
const foundShensha = allShensha.find(shensha => shensha[godId]);
console.log(foundShensha)

const benevolent = ref(benevolentShensha || []);
const malefic = ref(maleficShensha || []);
const dual = ref(dualShensha || []);

// Scroll to the element with the id matching the route.params.id after the component is mounted
nextTick(() => {
  const element = document.getElementById(godId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
</script>