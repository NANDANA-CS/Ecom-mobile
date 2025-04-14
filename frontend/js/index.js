async function loadData() {
    try {
       const res=await fetch("http://localhost:4000/api/mobiles/load") 
       const data=await res.json()
       console.log(data);
       let sr=""
       data.forEach(ele => {
        sr+=`
        <a href="/preview?id=${ele._id}" class="card">
            <div class="thumb"><img src="${ele.images[0]}" alt="loading.."></div>
            <p class="brand">${ele.brandname}</p>
            <p class="mobile">${ele.mobname}</p>
            <p class="price">${ele.price}</p>
        </a>`
       });
       document.getElementById("container").innerHTML=sr
       
    } catch (error) {
        console.log(error);
        
    }
}
loadData()

