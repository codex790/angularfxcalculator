describe('Currency Controller', function () {
    beforeEach(module('fxCalculator'));

    var ctrl, dataService, currencies;

    beforeEach(inject(function ($controller, dataservice) {
        ctrl = $controller('CurrencyController');
        dataService = dataservice;
    }));


    describe('Convert Currency', function () {
        beforeEach(function () {
            //test data
            currencies =  {};
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
                    currencies["EMPTY"] =
                       {
                           "Base": "EMPTY",
                           "CrossCurrencies": [],
                           "Direct": [],
                           "DecimalPlaces": 2
                       };

            spyOn(dataService, 'getCurrencies').and.returnValue(currencies);
        });

        it('should calculate 1 AUD to NZD Correctly', function () {
            ctrl.setFromCurrency(dataService.getCurrencies()["AUD"]);
            ctrl.setToCurrency(dataService.getCurrencies()["NZD"]);
            ctrl.setFromVal(1);
            expect(ctrl.calcCurrency()).toBe('1.08');
        });

        it('should calculate 1 AUD to AUD with Correct decimal places', function () {
            ctrl.setFromCurrency(dataService.getCurrencies()["AUD"]);
            ctrl.setToCurrency(dataService.getCurrencies()["AUD"]);
            ctrl.setFromVal(1);
            expect(ctrl.calcCurrency()).toBe('1.00');
        });

        it('should calculate 100 JPY to correct USD', function () {
            ctrl.setFromCurrency(dataService.getCurrencies()["JPY"]);
            ctrl.setToCurrency(dataService.getCurrencies()["USD"]);
            ctrl.setFromVal(100);
            expect(ctrl.calcCurrency()).toBe('0.83');
        });

        it('should calculate 100 AUD to correct JPY with no decimal places', function () {
            ctrl.setFromCurrency(dataService.getCurrencies()["AUD"]);
            ctrl.setToCurrency(dataService.getCurrencies()["JPY"]);
            ctrl.setFromVal(1);
            expect(ctrl.calcCurrency()).toBe('100');
        });

        it('should calculate Direct Convert from AUD to USD', function () {
            ctrl.setFromCurrency(dataService.getCurrencies()["AUD"]);
            ctrl.setToCurrency(dataService.getCurrencies()["USD"]);
            ctrl.setFromVal(1);
            expect(ctrl.calcCurrency()).toBe('0.84');
        });

        it('should calculate Direct Convert from AUD to USD', function () {
            ctrl.setFromCurrency(dataService.getCurrencies()["AUD"]);
            ctrl.setToCurrency(dataService.getCurrencies()["USD"]);
            ctrl.setFromVal(1);
            expect(ctrl.calcCurrency()).toBe('0.84');
        });

        it('should produce error message when it cant convert currency', function () {
            ctrl.setFromCurrency(dataService.getCurrencies()["AUD"]);
            ctrl.setToCurrency(dataService.getCurrencies()["EMPTY"]);
            ctrl.setFromVal(1);
            expect(ctrl.calcCurrency()).toBe('0.00');
            expect(ctrl.ErrorMessage).toBe("Unable to find the rate for EMPTY");
        });
    });
});