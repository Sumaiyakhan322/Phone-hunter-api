function loadData(searchText,isShowall) {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data,isShowall));
}
const displayPhones = (data,isShowall) => {
  // console.log(data.data);
  const card = document.getElementById("phone-con");
  //clear con
  card.textContent='';
  //show all
  const shoeAll=document.getElementById('show-all-container');
  if(data.length>12 && !isShowall){
   shoeAll.classList.remove('hidden');

  }
  else{
   shoeAll.classList.add('hidden')
  }
  //display only 10 items
  if(!isShowall){
    data=data.slice(0,12)
  }
  
  data.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList = "card  bg-base-100 shadow-xl p-6";
    
    div.innerHTML = `
      <figure><img src=${phone.image}></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>${phone.slug}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary mx-auto block" onclick="showDetails('${phone.slug}')">Show details</button>
                      </div>
                    </div> `;
    card.appendChild(div);
  });
  //hide spinner
  toggoltLoading()
};

//search button
const handleSearch=(isShowall)=>{
   toggoltLoading(true)
   const input=document.getElementById('input-value');
   const inputValue=input.value;
   console.log(inputValue);
   loadData(inputValue,isShowall);
   
   

}
//seach btn-2
const handleSearch2=()=>{
   const input=document.getElementById('input-value2');
   const inputValue=input.value;
   loadData(inputValue)
}

const toggoltLoading=(isLoading)=>{
   const loadingSpinner=document.getElementById('loading-spinner');
   if(isLoading){
      loadingSpinner.classList.remove('hidden');
   }
   else{
      loadingSpinner.classList.add('hidden');
   }
}
//show all btn

const showAll=()=>{
  console.log("hello");
   handleSearch(true)
}
//show details
const showDetails=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res=>res.json())
   .then(data=>inDetails(data.data))
  
}
 const inDetails=(data)=>{
  console.log(data);
 }

// loadData();

