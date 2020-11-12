
 var a =
  [ { "id" : "01" ,  
    "deptname" : "HR" , 
    "name" : "Aai" , 
    "bsalary" : "100000" ,  
    "ssalary" : "900" 
} ,
{ "id" : "02" ,  
    "deptname" : "IT" , 
    "name" : "Bee" , 
    "bsalary" : "100000" ,  
    "ssalary" : "900" 
},
{  "id" : "03" ,  
    "deptname" : "WH" , 
    "name" : "Cee" , 
    "bsalary" : "90000" ,  
    "ssalary" : "900" 
}  ]
var grades = { 
   'list' : {'e':10 , 'k':6 , 'm':7},
   'show' : function(){
       for(var name in this.list){
           console.log(name , this.list[name]);
       }
   }
}
grades['list']['e']; 
grades['show']();
grades.show();
var list = {'e':10 , 'k':6 , 'm':7};
for(var key in list){
    document.write("key:" +key + "value:"+ list[key] + "<br/>");
}

(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())