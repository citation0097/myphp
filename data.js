
var  arr = new Array ["a", "javascript", "author" , "hank"];

//  arr = ['seoul', 'new yourk', 'pusan'];
function getRandom(arr){
   var index = arr.length*Math.random();
   return arr[index];
}

Array.prototype.random = function(){
   var index = Math.floor(this.length*Math.random());
   return this[index];
}
var that = new Array( 'a', 'f', 'c');
that.random();
// mozila develop

Object.prototype.contain = function(needle){
   for(var name in this){
      if(this[name] === needle){
         return true;   
      }
   }
   return false;
}



