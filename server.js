// var sym =[{"symbols":"xyz","type":"none","var":"int"},
// {"symbols":"xyz","type":"none","var":"int"}]
// var symbols=[];
// sym.forEach(function(element) {
//     symbols.push(element.symbols);
// });
data=[{"a":1},{"a":2}];
r=[];
myMapproj=function(val) {
    return val+5;
}
function myMap(data){
   data.forEach(function(va){
     r.push(myMapproj(va.a));
   })
   console.log("inside function----->",r);
}
myMap(data);
console.log("value of aa---->",r);


var d=[{"a":2},{"a":2}]
var arry=[];
arry=map1(function(val){
    val+7;
})
