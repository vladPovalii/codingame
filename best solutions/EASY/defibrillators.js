/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var LON = +readline().replace(',', '.');
var LAT = +readline().replace(',', '.');
var N = parseInt(readline());
var result = '', temp = 100;
for (var i = 0; i < N; i++) {
    var DEFIB = readline().split(';');
    var lon = +DEFIB[DEFIB.length-2].replace(',', '.');
    var lat = +DEFIB[DEFIB.length-1].replace(',', '.');
    var d = Math.sqrt(Math.pow(lon-LON, 2) + Math.pow(lat-LAT, 2));
    if (d <= temp) {
        temp = d;
        result = DEFIB[1];
    }
}
print(result);

/**************************************OR*****************************************/

// lets define some usefull stuff:
const pow = Math.pow.bind(Math);
const sqrt = Math.sqrt.bind(Math);
const dist = (a, b) => sqrt(pow(a[0]-b[0],2) + pow(a[1]-b[1],2));

// now get the current position of the person as array and convert them to floats
const p = [0,0].map(x=>+readline().replace(",","."));

// turn the data into an array and loop through it
print(new Array(+readline()).fill()
    // split the data as defined using a ;
    .map(x=>readline().split(";"))
    // now turn each row into an object
    .map(x=>{
        x = {
            // n == name of the location
            n: x[1],
            // p == [LON, LAT]
            // convert them to floats
            p: x.splice(-2).map(x=>+x.replace(",","."))
        };
        // d == distance to person
        x.d = dist(x.p, p);
        // return on the fly created object
        return x;
    })
    // sort the dataset based on distance
    .sort((a,b)=>a.d-b.d)
    // return the name of the row with the closest distance
    .shift().n
// print it!
);
