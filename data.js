
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
