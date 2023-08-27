 function loadData(){
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res=>res.json())
    .then(data=>displayPhones(data.data))
 }
 const displayPhones=(data)=>{
    // console.log(data.data);
    data.forEach(phone => {
     console.log(phone);
    });
 }
 loadData()