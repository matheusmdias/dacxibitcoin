<template>
  <div class="flex items-center">
    <div class="p-4 rounded-lg shadow-md border border-gray-400  text-gray-800">
      <h1 class="text-3xl font-bold mb-4">{{ store.selectedCoinLabel }} Price Tracker</h1>
      <div class="flex justify-between">
        <div>
          <p class="text-xl font-medium mb-2">Current Price ({{ store.selectedCurrency }}):</p>
          <p v-if="loading" class="text-2xl text-gray-800">Loading...</p>
          <p v-else id="bitcoin-price" class="text-2xl text-gray-800">${{ store.coinPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from '@/store/index.js'; // Import your Pinia store

const store = useStore();
const loading = ref(true);

const fetchCoinPrice = async () => {
  try {
    loading.value = true;
    await store.fetchCoinPrice(store.selectedCoin); 
    loading.value = false;
  } catch (error) {
    console.error('Error fetching coin price:', error);
  }
};

// Fetch initial coin price on component mount
onMounted(async () => {
  await fetchCoinPrice();
  const intervalId = setInterval(fetchCoinPrice, 600000);
  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
});
</script>

<style scoped>
/* Adjust the width of the price tracker container */
.price-tracker-container {
  width: 100%; /* This will ensure the container takes up the full width of its parent */
  max-width: 800px; /* Optional: Set a max-width to prevent it from growing too large */
}
</style>