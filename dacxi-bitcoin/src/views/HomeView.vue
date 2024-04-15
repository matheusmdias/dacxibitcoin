<template>
  <div class="min-w-full">
    <header class="text-center text-3xl font-bold mb-4 text-white bg-gradient-to-r from-violet-500 to-violet-700 py-4">
      Dacxi Crypto coin tracker
    </header>
    <main class="flex justify-center items-center min-h-full text-gray-800 pb-8"> <!-- Add bottom padding to create space for the footer -->
      <div class="text-gray-800 p-4 rounded-lg shadow-md border border-gray-400">
        <h1 class="text-3xl font-bold mb-4">{{ store.selectedCoinLabel }} Price</h1>
        <label for="coinSelect" class="block mb-2">Select Coin:</label>
        <CoinDropdown id="coinSelect" />
        <div class="flex flex-col sm:flex-row"> <!-- Use flex-col for small screens and flex-row for larger screens -->
          <BitcoinPriceTracker class="sm:pb-0 pb-6 mr-4" /> <!-- mb-4 for spacing between components, sm:mb-0 removes margin-bottom on larger screens, sm:mr-4 adds margin-right on larger screens -->
          <BitcoinHistoryPrice class=" sm:pb-0 pb-10" />
        </div>
      </div>
    </main>
    <footer class="bg-gray-800 fixed bottom-0 left-0 right-0">
      <p class="text-center text-gray-500 py-4">Dacxi Bitcoin - &copy; {{ year }}</p>
    </footer>
  </div>
</template>


<script setup>
  import BitcoinHistoryPrice from '@/components/BitcoinHistoryPrice.vue';
  import BitcoinPriceTracker from '@/components/BitcoinPriceTracker.vue';
  import CoinDropdown from '@/components/CoinDropdown.vue'; // Import the CoinDropdown component

  import { useStore } from '@/store/index.js'; // Import your Pinia store

const store = useStore();
</script>