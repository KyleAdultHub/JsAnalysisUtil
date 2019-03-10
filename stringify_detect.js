 //HOOK JSON stringify
 var rstringify = JSON.stringify;
 JSON.stringify = function(a){
     if (!!a.ua){
         //debugger;
     }
     console.log("Detect Json.stringify", a);
     return rstringify(a);
 }
