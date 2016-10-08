// chadox
function shadoksConvert(str){
  var num = parseInt(str, 10);
  var arr = (num.toString(4).split(''));
  if(arr.length === 1){
    console.log('GA');
  }else{
    var item, answer = "";
    while(item = arr.shift()){
      if(item === "0"){
        answer += "GA";
      }else if(item === "1"){
        answer += "BU";
      }else if(item === "2"){
        answer += "ZO";
      }else if(item === "3"){
        answer += "MEU";
      }
    }
    console.log(answer);
  }
}
//_________________________________________________________________________________________________________________________________
//leap year
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
//_________________________________________________________________________________________________________________________________
// Common great dividor (CGD)
var a = readline().split(' ');
print(cgd(parseInt(a[0]),parseInt(a[1])));
function f(x, y){
	while(y != 0){
		var z=x%y;
		x=y;
		y=z;
	}
	return x;
}

// Shorter version
[x,y] = readline().split(' ').map(function(i){return parseInt(i)});
while(y!=0){
	var z=x%y;
	x=y;
	y=z;
}
print(x);

// super min version (without parseInt)
[x,y] = readline().split(' ');
while(y!=0){
	var z=x%y;
	x=y;
	y=z;
}
print(x);
//_________________________________________________________________________________________________________________________________

//check for palindrom
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}
