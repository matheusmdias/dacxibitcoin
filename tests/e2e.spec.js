import { test, expect } from '@playwright/test';

test('BitcoinPriceTracker updates when coin selection changes', async ({ page }) => {
  // Navigate to your application
  await page.goto('http://localhost:5173');

  // Wait for the Bitcoin price element to appear
  await page.waitForSelector('#bitcoin-price');

  // Get the initial Bitcoin price
  const initialBitcoinPrice = await page.textContent('#bitcoin-price');

  //await page.waitForSelector('#coinSelect');
  // Select a different coin in the dropdown
  //await page.selectOption('#coinSelect', 'Ethereum'); // Replace 'Ethereum' with the coin you want to select
  await page.selectOption('#coinSelect', { label: 'Ethereum' }); // Selecting by label


  // Wait for the Bitcoin price to update
  await page.waitForFunction(
    (initialPrice) => {
      const updatedPrice = document.querySelector('#bitcoin-price').textContent;
      return updatedPrice !== initialPrice;
    },
    {},
    initialBitcoinPrice
  );

  // Get the updated Bitcoin price
  const updatedBitcoinPrice = await page.textContent('#bitcoin-price');

  // Assert that the Bitcoin price has been updated
  expect(updatedBitcoinPrice).not.toBeNull();
  expect(updatedBitcoinPrice).not.toEqual(initialBitcoinPrice);
});
