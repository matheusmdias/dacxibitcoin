import { defineStore } from 'pinia';
import apiService from '@/services/apiService'; // Import your API service

export const useStore = defineStore('store', {
  state: () => ({
    coinPrice: null,
    historicalCoinPrice: null,
    selectedCurrency: 'usd', // Default to USD
    selectedCoin: 'bitcoin', // Default to Bitcoin
    selectedCoinLabel: 'Bitcoin', // Default label for Bitcoin
  }),
  actions: {
    async fetchCoinPrice() {
      try {
        const response = await apiService.getCoinPrice(this.selectedCurrency, this.selectedCoin); // Pass selected coin to the API call
        this.coinPrice = response.data[this.selectedCoin][this.selectedCurrency];
      } catch (error) {
        console.error('Error fetching coin price:', error);
      }
    },
    async fetchHistoricalCoinPrice(date) {
      try {
        const response = await apiService.getHistoricalCoinPrice(date, this.selectedCoin); // Pass selected coin to the API call
        this.historicalCoinPrice = response.data.market_data.current_price.usd; // Adjust based on actual response structure
      } catch (error) {
        console.error('Error fetching historical coin price:', error);
      }
    },
    updateCurrency(currency) {
      this.selectedCurrency = currency;
      this.fetchCoinPrice(this.selectedCoin); // Fetch coin price with the updated currency and selected coin
    },
    updateCoin(coin, coinLabel) {
      this.selectedCoin = coin;
      this.historicalCoinPrice = null;
      this.selectedCoinLabel = coinLabel; // Assuming the coin name can be used as the label
      this.fetchCoinPrice(coin); // Fetch coin price with the updated selected coin
    },
  },
});
