 var app =( function () {
            var calc = new Calculator();

            var listWriter = new domutils.Writer('numberList', function(msg){
                    return "<tr><td>"+msg+"</td></tr>";
            });
            
            var consoleWriter = new domutils.Writer('console');


            var numberBox = new domutils.Input('number');


            var addToList = function () {

                var number = numberBox.getNumber();

                if (calc.addToList(number)) {
                    listWriter.write(number);
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

            //access to private field is not desirable
            var refresh_private = function () {
                //consoleWriter.write('no yet implemented');
                listWriter.clear();
                for(var i=0;i<calc.numbers.length;i++){
                    listWriter.write(calc.numbers[i]);
                }
            };

            //get an array can still potentially manipualte array
            var refresh_getter = function () {
                //consoleWriter.write('no yet implemented');
                listWriter.clear();
                var numbers=calc.getNumbers();

                for(var i=0;i<numbers.length;i++){
                    listWriter.write(numbers[i]);
                    numbers[i]=0;
                }
            };

            var refresh_calc_refersh = function( ){
              calc.refresh(listWriter);  
            };

            var _min=function(){

                var result=NaN;

                calc.process(function(n,i){
                    if(i===0)
                        result=n;
                    else if(n<result)
                        result=n;
                });

                return result;

            };
            
            var findMin = function () {
                var result=_min();
                consoleWriter.write('min is '+result);
            };


            var refresh = function( ){

                var task=function(number){
                    listWriter.write(number);
                    number=0;
                };

                listWriter.clear();
                calc.process(task);

            };


            var keyBox=new domutils.Input('key');
            var save = function( ){
                var key=keyBox.get();
                if(!key){
                 
                    return consoleWriter.write('No key supplied...');
                }
                var data=[];

                calc.process(function(n){
                    data.push(n);
                });

                localStorage.setItem(key,JSON.stringify(data));
                consoleWriter.write('data saved as '+key);
              

            };

            var load=function(){
                var key=keyBox.get();
                if(!key)
                    return consoleWriter.write('No key supplied...');

                var json= localStorage.getItem(key);
                if(!json){
                    return consoleWriter.write('invalid key');

                }

                var data=JSON.parse(json);
                calc.reset();
                for(var i=0;i<data.length;i++){
                    calc.addToList(data[i]);
                }

                refresh();
            };




            return {
                addToList:addToList,
                clear:clear,
                reset:reset,
                refresh:refresh,
                sum:sum,
                min:findMin,
                avg:avg,
                saveData:save,
                loadData:load
            };

        })();