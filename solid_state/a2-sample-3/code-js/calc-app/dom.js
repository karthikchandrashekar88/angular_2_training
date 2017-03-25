var domutils = (function () {


    var Writer = function (id, formatter = 'p') {

        //if(!formatter)
        //    formatter='p';

        var element = document.getElementById(id);
        var format = formatter;

        if (typeof (formatter) !== 'function') {
            var tag = formatter.toString();
            var start = '<' + tag + '>';
            var end = '</' + tag + '>';

            // format = function (msg) {
            //     return start + msg + end;
            // };


            format= msg=> `${start} ${msg} ${end}`;

            

        }

        /*
        if (!tag)
        
        */

        this.write = function (...messages) {
            for (var i = 0; i < messages.length; i++) {
                element.innerHTML += format(messages[i]);
            }
        };

        this.clear = function () {
            element.innerHTML = '';

        };

    };

    var Input = function (id) {
        var box = document.getElementById(id);
        this.getNumber = function () {
            return parseFloat(box.value);
        };

        this.get = function () {
            return box.value;
        };

        this.clear = function () {
            box.value = '';
        };

    };

    return {
        Writer: Writer,
        Input: Input
    };



})();