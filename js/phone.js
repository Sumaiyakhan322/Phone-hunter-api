function loadData(searchText) {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
}
const displayPhones = (data) => {
  // console.log(data.data);
  const card = document.getElementById("phone-con");
  //clear con
  card.textContent='';

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
                        <button class="btn btn-primary mx-auto block">Show details</button>
                      </div>
                    </div> `;
    card.appendChild(div);
  });
};

//search button
const handleSearch=()=>{
   const input=document.getElementById('input-value');
   const inputValue=input.value;
   console.log(inputValue);
   loadData(inputValue)

}
// loadData();
