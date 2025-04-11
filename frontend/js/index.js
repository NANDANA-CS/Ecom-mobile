async function loadData() {
    try {
       const res=await fetch("http://localhost:4000/api/mobiles/load") 
       const data=await res.json()
       console.log(data);
       let body=""
       data.forEach(ele => {
        body+=`
        <a href="/preview?id=${ele._id}"><div class="card">
            <img src="${ele.images[0]}" alt="loading..">
            <p class="brand">${ele.brandname}</p>
            <p class="mobile">${ele.mobname}</p>
            <p class="price">${ele.price}</p>
        <div></a>`
       });
       document.getElementById("container").innerHTML=body
       
    } catch (error) {
        console.log(error);
        
    }
}
loadData()

