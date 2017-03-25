var avg = function (x, y) {
    return (x + y) / 2;
};
console.log('avg(2,3)', avg(2, 3));
var result = avg(7, 7);
console.log('result :', result);
var result2 = avg(9, 8);
console.log('result2 :', result2);
var Point = (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return "Point(" + this.x + "," + this.y + ")";
    };
    return Point;
}());
var p = new Point(3, 4);
console.log("point is " + p);
