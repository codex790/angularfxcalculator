angular.
    module('fxCalculator', []).
    controller('CurrencyController', CurrencyController);

CurrencyController.$inject = ['dataservice'];

function CurrencyController(dataservice) {
    var vm = this;
    vm.currencies = dataservice.getCurrencies();
    vm.fromCurrency = vm.currencies["AUD"];
    vm.toCurrency = vm.currencies["USD"];
    vm.fromVal = 0;

    vm.calcCurrency = function () {
        vm.calculatedAmount = undefined;
        vm.interimAmount = vm.fromVal;
        var decimalPlace = vm.toCurrency.DecimalPlaces;
        vm.ErrorMessage = '';

        //get conversionRate
        //check if equivalent to and from currency
        if (vm.fromCurrency.Base === vm.toCurrency.Base) {
            vm.calculatedAmount = vm.fromVal;
        } else {
            //check if there is a direct or inverse map
            vm.calculatedAmount = getDirectConversionCalculation(vm.fromCurrency, vm.fromVal, vm.toCurrency);

            if (vm.calculatedAmount === undefined) {
                //check to see if there is a cross mapped relationship for currency conversion
                getCrossMappedConversionAmount(vm.fromCurrency);
            }
        }

        if (vm.calculatedAmount === undefined || vm.calculatedAmount === null) {
            vm.calculatedAmount = 0; //show error in this case also
            vm.ErrorMessage = "Unable to find the rate for " + vm.toCurrency.Base;
        }

        //calculate based on conversion rate to correct decimal place
        return parseFloat(vm.calculatedAmount).toFixed(decimalPlace);
    };

    function getDirectConversionCalculation(fromCurrency, interimCalc, toCurrency) {
        if (interimCalc === undefined) {
            interimCalc = 0;
        }
        for (var i = 0; i < fromCurrency.Direct.length; i++) {
            if (fromCurrency.Direct[i].ToName === toCurrency.Base) {
                if (fromCurrency.Direct[i].Type === 'Direct') {
                    return interimCalc * fromCurrency.Direct[i].value;
                } else if (fromCurrency.Direct[i].Type === 'Inverse') {
                    return interimCalc * (1 / fromCurrency.Direct[i].value);
                }
            }
        }
        return undefined;
    }

    function getCrossMappedConversionAmount(fromCurrency) {
        for (var j = 0; j < fromCurrency.CrossCurrencies.length; j++) {
            if (fromCurrency.CrossCurrencies[j].Term === vm.toCurrency.Base) {
                if (fromCurrency.CrossCurrencies[j].Cross === "DIRECT") {
                    //refer to the direct mapping value
                    //we want the recursive call to eventually get here where it will map directly to a rate
                    vm.calculatedAmount = getDirectConversionCalculation(fromCurrency, vm.interimAmount, vm.toCurrency);
                    break;
                } else {
                    //use the cross type to further look up the map
                    //do an initial calc
                    var crossCurrency = vm.currencies[fromCurrency.CrossCurrencies[j].Cross];
                    var fromVal = vm.interimAmount;
                    vm.interimAmount = getDirectConversionCalculation(fromCurrency, fromVal, crossCurrency);
                    if (vm.interimAmount === undefined) {
                        vm.interimAmount = fromVal;
                    }

                    getCrossMappedConversionAmount(crossCurrency);
                }
            }
        }
    }

    vm.setFromCurrency = function(fromCurrency) {
        vm.fromCurrency = fromCurrency;
    }

    vm.setToCurrency = function (toCurrency) {
        vm.toCurrency = toCurrency;
    }

    vm.setFromVal = function (fromVal) {
        vm.fromVal = fromVal;
    }
}
