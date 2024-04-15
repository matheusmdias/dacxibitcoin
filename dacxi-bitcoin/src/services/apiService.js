import axios from 'axios';

export default {
    async getCoinPrice(currency,coin) {
        try {
            console.log('currency: ',currency)
            return await axios.request({
                url:`simple/price?ids=${coin}&vs_currencies=${currency}`,
                method: 'GET',
                baseURL: 'https://api.coingecko.com/api/v3/',
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json',
                     'Access-Control-Allow-Origin': 'localhost:5173',
                },
            });
        } catch (error) {
            throw new Error(`Error fetching coin price: ${error.message}`);
        }
    },
    async getHistoricalCoinPrice(date, coin) {
        try {
            return await axios.request({
                url:`coins/${coin}/history?date=${date}&localization=false`,
                method: 'GET',
                baseURL: 'https://api.coingecko.com/api/v3/',
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json',
                     'Access-Control-Allow-Origin': 'localhost:5173',
                },
            });
        } catch (error) {
            throw new Error(`Error fetching coin price: ${error.message}`);
        }
    },

    // //https://api.coingecko.com/api/v3/
    // async getHistoricalCoinPrice(date) {
    //     try {
    //       return await axios.request({
    //         url: `coins/bitcoin/history?date=${date}&localization=false`,
    //         method: 'GET',
    //         baseURL: 'https://api.coingecko.com/api/v3/',
    //         withCredentials: false,
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Access-Control-Allow-Origin': 'localhost:5173',
    //         },
    //       });
    //     } catch (error) {
    //       throw new Error(`Error fetching historical Bitcoin price: ${error.message}`);
    //     }
    //   },
}