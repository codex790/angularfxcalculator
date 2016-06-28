angular
    .module('fxCalculator')
    .factory('dataservice', function() {
            var dataservice = {};

            dataservice.getCurrencies = function() {
                var currencies = {};
                currencies["AUD"] = {
                    "Base": "AUD",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "AUD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "USD" },
                        { Term: "DKK", Cross: "USD" },
                        { Term: "EUR", Cross: "USD" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "USD" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "USD" }
                    ],
                    "Direct": [{ ToName: 'USD', value: 0.8371, Type: 'Direct' }],
                    "DecimalPlaces": 2
                };
                currencies["CAD"] = {
                    "Base": "CAD",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "CAD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "USD" },
                        { Term: "DKK", Cross: "USD" },
                        { Term: "EUR", Cross: "USD" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "USD" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "DIRECT" }
                    ],
                    "Direct": [{ ToName: 'USD', value: 0.8371, Type: 'Direct' }],
                    "DecimalPlaces": 2
                };
                currencies["CNY"] =
                {
                    "Base": "CNY",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "CNY" },
                        { Term: "CZK", Cross: "USD" },
                        { Term: "DKK", Cross: "USD" },
                        { Term: "EUR", Cross: "USD" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "USD" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "DIRECT" }
                    ],
                    "Direct": [{ ToName: 'USD', value: 0.8371, Type: 'Direct' }],
                    "DecimalPlaces": 2
                };
                currencies["CZK"] = {
                    "Base": "CZK",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "CZK" },
                        { Term: "DKK", Cross: "EUR" },
                        { Term: "EUR", Cross: "DIRECT" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "EUR" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "EUR" }
                    ],
                    "Direct": [{ ToName: 'EUR', value: 0.8371, Type: 'Inverse' }],
                    "DecimalPlaces": 2
                };
                currencies["DKK"] = {
                    "Base": "DKK",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "EUR" },
                        { Term: "DKK", Cross: "DKK" },
                        { Term: "EUR", Cross: "DIRECT" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "EUR" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "EUR" }
                    ],
                    "Direct": [{ ToName: 'EUR', value: 7.4405, Type: 'Inverse' }],
                    "DecimalPlaces": 2
                };
                currencies["EUR"] = {
                    "Base": "EUR",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "DIRECT" },
                        { Term: "DKK", Cross: "DIRECT" },
                        { Term: "EUR", Cross: "EUR" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "DIRECT" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "DIRECT" }
                    ],
                    "Direct": [
                        { ToName: 'CZK', value: 27.6028, Type: 'Direct' },
                        { ToName: 'DKK', value: 7.4405, Type: 'Direct' },
                        { ToName: 'NOK', value: 8.6651, Type: 'Direct' },
                        { ToName: 'USD', value: 1.2315, Type: 'Direct' }
                    ],
                    "DecimalPlaces": 2
                };
                currencies["GBP"] = {
                    "Base": "GBP",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "USD" },
                        { Term: "DKK", Cross: "USD" },
                        { Term: "EUR", Cross: "USD" },
                        { Term: "GBP", Cross: "GBP" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "USD" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "DIRECT" }
                    ],
                    "Direct": [{ ToName: 'USD', value: 1.5683, Type: 'Direct' }],
                    "DecimalPlaces": 2
                };
                currencies["JPY"] = {
                    "Base": "JPY",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "USD" },
                        { Term: "DKK", Cross: "USD" },
                        { Term: "EUR", Cross: "USD" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "JPY" },
                        { Term: "NOK", Cross: "USD" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "DIRECT" }
                    ],
                    "Direct": [{ ToName: 'USD', value: 119.95, Type: 'Inverse' }],
                    "DecimalPlaces": 0
                };
                currencies["NOK"] =
                {
                    "Base": "NOK",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "EUR" },
                        { Term: "DKK", Cross: "EUR" },
                        { Term: "EUR", Cross: "DIRECT" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "NOK" },
                        { Term: "NZD", Cross: "USD" },
                        { Term: "USD", Cross: "EUR" }
                    ],
                    "Direct": [{ ToName: 'EUR', value: 8.6651, Type: 'Inverse' }],
                    "DecimalPlaces": 2
                };
                currencies["NZD"] =
                {
                    "Base": "NZD",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "USD" },
                        { Term: "CAD", Cross: "USD" },
                        { Term: "CNY", Cross: "USD" },
                        { Term: "CZK", Cross: "USD" },
                        { Term: "DKK", Cross: "USD" },
                        { Term: "EUR", Cross: "USD" },
                        { Term: "GBP", Cross: "USD" },
                        { Term: "JPY", Cross: "USD" },
                        { Term: "NOK", Cross: "USD" },
                        { Term: "NZD", Cross: "NZD" },
                        { Term: "USD", Cross: "DIRECT" }
                    ],
                    "Direct": [{ ToName: 'USD', value: 0.7750, Type: 'Direct' }],
                    "DecimalPlaces": 2
                };
                currencies["USD"] =
                {
                    "Base": "USD",
                    "CrossCurrencies": [
                        { Term: "AUD", Cross: "DIRECT" },
                        { Term: "CAD", Cross: "DIRECT" },
                        { Term: "CNY", Cross: "DIRECT" },
                        { Term: "CZK", Cross: "EUR" },
                        { Term: "DKK", Cross: "EUR" },
                        { Term: "EUR", Cross: "DIRECT" },
                        { Term: "GBP", Cross: "DIRECT" },
                        { Term: "JPY", Cross: "DIRECT" },
                        { Term: "NOK", Cross: "EUR" },
                        { Term: "NZD", Cross: "DIRECT" },
                        { Term: "USD", Cross: "USD" }
                    ],
                    "Direct": [
                        { ToName: 'AUD', value: 0.8371, Type: 'Inverse' },
                        { ToName: 'CAD', value: 0.8711, Type: 'Inverse' },
                        { ToName: 'CNY', value: 6.1715, Type: 'Direct' },
                        { ToName: 'EUR', value: 1.2315, Type: 'Inverse' },
                        { ToName: 'GBP', value: 1.5683, Type: 'Inverse' },
                        { ToName: 'JPY', value: 119.95, Type: 'Direct' },
                        { ToName: 'NZD', value: 0.7750, Type: 'Inverse' }
                    ],
                    "DecimalPlaces": 2
                };

                return currencies;
            };

            return dataservice;
        }
    )
    