let id1 = setInterval(function(){
    console.log("task done again");
},3000);
 
setTimeout(function (){
    clearInterval(id1);
}, 13000);
