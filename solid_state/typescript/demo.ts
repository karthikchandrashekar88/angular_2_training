var avg = function(x:number,y:number){
    return (x+y)/2;
}

console.log('avg(2,3)',avg(2,3));
var result = avg(7,7);
console.log('result :',result);

var result2 = avg(9,8);
console.log('result2 :',result2);

class Point {
    constructor(private x:number =0,private y:number=0){

    }

    toString(){
        return `Point(${this.x},${this.y})`;
    }
}

    var p = new Point(3,4);
    console.log(`point is ${p}`);