<template>
    <select v-model="selectedCoin" @change="handleChange" class="px-3 py-2 border border-gray-300 rounded-md">
      <option v-for="coin in coins" :key="coin.value" :value="coin.value">{{ coin.label }}</option>
    </select>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from '@/store/index.js'; // Import your Pinia store
  
  export default {
    setup() {
      const store = useStore();
      const selectedCoin = ref(store.selectedCoin); // Use the selectedCoin from the store
  
      const coins = [
        { label: 'Bitcoin', value: 'bitcoin' },
        { label: 'Ethereum', value: 'ethereum' },
        { label: 'ATOM', value: 'cosmos' },
        { label: 'DACXI', value: 'dacxi' },
      ];
  
      const handleChange = () => {
        store.updateCoin(selectedCoin.value, coins.find(coin => coin.value === selectedCoin.value).label); // Call updateCoin from the store when coin selection changes
      };
  
      return {
        selectedCoin,
        coins,
        handleChange,
      };
    },
  };
  </script>
  