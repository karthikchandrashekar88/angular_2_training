 var Calculator = function () {
            //intentionally private
            var numbers=[];
           // this. numbers = numbers;

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

            //shouldn't expose private array
            //as it is under risk of unexpected manipulation
            this.getNumbers=function(){
                return numbers;
            };
            //shouldn't know the
            //presentation layer
            this.refresh=function(listWriter){
                
                listWriter.clear();
                for(var i=0;i<numbers.length;i++){
                    listWriter.write(numbers[i]);
                }
            };

            this.process=function(task){
                
                for(var i=0;i<numbers.length;i++){
                    task(numbers[i],i);
                }
            };





        };