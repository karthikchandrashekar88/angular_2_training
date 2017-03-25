var domutils = (function () {

    
    var Writer = function (id, tag) {

        var element = document.getElementById(id);

        if (!tag)
            tag = 'p';

        var start = '<' + tag + '>';
        var end = '</' + tag + '>';

        this.write = function (msg) {
            element.innerHTML += (start + msg + end);
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