const params=new URLSearchParams(window.location.search)
let id=params.get("id")
console.log(id);

async function previewData() {
    try {
        let res=await fetch(`http://localhost:4000/api/mobiles/preview/${id}`)
        let data=await res.json()
        console.log(data);

        image=data.thumbnail
        let simgs=""
        data.images.map((ele)=>{
            simgs+=`
            <img src="${ele}" onmouseover="preimage(this)">`
        })
        btns=`
        <div class="btns">
            <div class="addtocart">Add to Cart</div>
        </div>`

        actionbtns=`
        <div class="acbtns"><a href="/update?id=${id}"><div>Edit</div></a>
        <div onclick="deletedata()" class="delete">Delete</div></div>`

        document.getElementById("actions").innerHTML=actionbtns
        document.getElementById("thumbnail").innerHTML=simgs
        document.getElementById("images").innerHTML=`<img src="${data.images[0]}">${btns}`
        document.getElementById("content").innerHTML = `
        <p class="brand">${data.brandname}</p>
        <p class="title">${data.mobname}</p>
        <p class="price">$${data.price}</p>
        <p class="color">$${data.color}</p>
        <p class="quantity">$${data.quantity}</p>`



        
    } catch (error) {
        console.log("preview error",error);
        
    }
}
previewData()

function preimage(img){
    image=img.src
    document.getElementById("images").innerHTML = `<img src=${image}> ${btn}`

}

async function deletedata() {
    console.log("del fn");
    console.log(id);
    try {
       const res=await fetch(`http://localhost:4000/api/mobiles/delete/${id}`)
        const data=res.json()
        // console.log(data);
        if (res.status===200) {
            window.location.href="http://localhost:4000"
        } else {
            alert("error",data.error)
        }
        
    } catch (error) {
        console.log(error);
        
    }
}


