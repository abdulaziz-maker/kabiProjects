let a = [1,2,3];
let y=[];


function test(){
   a.forEach(function(item){
    y.push(item)
    
   }) 

   
}
function sliceA(){
   y= a.slice(1,3);
}
test();
// console.log(y);
// sliceA();
a.splice(0,40);
console.log(y);
console.log(a);