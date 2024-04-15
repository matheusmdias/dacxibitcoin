<template>
  <select v-model="selectedCurrency" @change="handleChange" class="hover:cursor-pointer">
    <option v-for="option in currencyOptions" :key="option.value" :value="option.value" :title="option.title">{{ option.label }}</option>
  </select>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

// Define emitted events
const emits = defineEmits(['update:modelValue']);

const selectedCurrency = ref('usd'); // Default currency is USD

const handleChange = (event) => {
  selectedCurrency.value = event.target.value;
console.log('before emits', selectedCurrency.value)
  emits('update:modelValue', selectedCurrency.value); // Emit the selected currency to the parent
};

const currencyOptions = [
  { label: 'USD', value: 'usd', title: 'United States Dollar (USD)' },
  { label: 'EUR', value: 'eur', title: 'Euro (EUR)' },
  { label: 'CNH', value: 'cnh', title: 'Chinese Yuan (Renminbi) (CNH)' },
  { label: 'BRL', value: 'brl', title: 'Brazilian Real (BRL)' },
];

// Expose reactive variables and functions to the template
</script>
