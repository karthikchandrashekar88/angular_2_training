 var app =( function () {
            var calc = new Calculator();
            var listWriter = new domutils.Writer('numberList', 'tr');
            var consoleWriter = new domutils.Writer('console');
            var numberBox = new domutils.Input('number');


            var addToList = function () {

                var number = numberBox.getNumber();

                if (calc.addToList(number)) {
                    listWriter.write('<td align=\'center\'>'+number+'</td>');
                } else {
                    consoleWriter.write('invalid input');
                }

            };

            var sum = function () {
                var result = calc.sum();
                consoleWriter.write('sum is ' + result);
            };

            var avg = function () {
                var result = calc.avg();
                consoleWriter.write('avg is ' + result);
            };

            var findMin = function () {
                var result = calc.min();
                consoleWriter.write('min is :'+result);
            };

            var clear = function () {
                consoleWriter.clear();
                listWriter.clear();
                numberBox.clear();
            };

            var clearDisplay = clear;

            var reset = function () {
                calc.reset();
                clear();
            };

            var refresh = function () {
                consoleWriter.write('no yet implemented');
            };

            return {
                addToList:addToList,
                clear:clear,
                reset:reset,
                refresh:refresh,
                sum:sum,
                min:findMin,
                avg:avg
            };

        })();