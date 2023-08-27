 function loadData(){
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res=>res.json())
    .then(data=>getdata(data))
 }
 function getdata(data){
    console.log(data.data);
 }
 loadData()