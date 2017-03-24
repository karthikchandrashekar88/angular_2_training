 var Calculator = function () {
            //intentionally private
            var numbers = [];

            this.addToList = function (number) {
                if (isNaN(number))
                    return false;

                numbers.push(number);
                return true;
            };

            this.sum = function () {
                var result = 0;
                for (var i = 0; i < numbers.length; i++)
                    result += numbers[i];

                return result;
            };

            this.avg = function () {
                return this.sum() / numbers.length;
            };

            this.reset = function () {
                numbers = [];
            };


        };