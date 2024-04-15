<template>
  <div class="flex justify-center items-center">
    <div class="p-4 rounded-lg shadow-md border border-gray-400  text-gray-800">
      <h1 class="text-3xl font-bold mb-4">{{ store.selectedCoinLabel }} Price History</h1>
      <div class="mt-4">
        <label for="dateInput" class="block mb-2">Select Date:</label>
        <input type="date" id="dateInput" v-model="selectedDate" class="px-3 py-2 border border-gray-300 rounded-md">
        <button @click="fetchHistoricalCoinPrice" class="px-4 py-2 bg-violet-500 text-white rounded-md ml-4">Fetch Historical Price</button>
      </div>
      <div v-if="store.historicalCoinPrice != null" class="mt-4">
        <p  class="text-xl font-medium mb-2">Historical Price (USD):</p>
        <p v-if="loading" class="text-2xl text-gray-800">Loading...</p>
        <p  class="text-2xl text-gray-800">${{ store.historicalCoinPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '@/store/index.js'; // Import your Pinia store

const store = useStore();
const selectedDate = ref('');
const loading = ref(false);

function formatDate(date) {
  const day = date.split('-')[2];
  const month = date.split('-')[1];
  const year = date.split('-')[0];
  return `${day}-${month}-${year}`;
}
const fetchHistoricalCoinPrice = async () => {
  try {

    loading.value = true;
    if (!selectedDate.value) {
      console.error('Please select a date.');
      return;
    }
    await store.fetchHistoricalCoinPrice(formatDate(selectedDate.value));
    console.log(formatDate(selectedDate.value))
    loading.value = false;
  } catch (error) {
    console.error('Error fetching historical Bitcoin price:', error);
  }
};
</script>

<style>
/* Responsive styles */

</style>
