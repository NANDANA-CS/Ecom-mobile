const params = new URLSearchParams(window.location.search)
let id = params.get("id")
let imgs=[]
let content=null
let i = 0

async function loaddata() {
    try {
        let res = await fetch(`http://localhost:4000/api/mobiles/loaddata/${id}`)
        let data = await res.json()

        document.getElementById("mobname").value = data.mobilename
        document.getElementById("brandname").value = data.brandname
        document.getElementById("ram").value = data.ram
        document.getElementById("storage").value = data.storage
        document.getElementById("price").value = data.price
        document.getElementById("color").value = data.color
        document.getElementById("quantity").value = data.quantity

        imgs=data.images
        i=index+1

        data.images.forEach((img) => {
            preimage+= `<img src="${img}" alt="Preview" style="width:200px;">`
            document.getElementById("previewimages").innerHTML = preview

        });
 
}catch(error){
    console.log(error);
    
}
}
loaddata()


async function submitData(event){
    event.preventDefault()
    console.log("Inside fuv");
    
    content={
        mobname:document.getElementById("mobname").value,
        brandname:document.getElementById("brandname").value,
        ram:document.getElementById("ram").value,
        storage:document.getElementById("storage").value,
        color:document.getElementById("color").value,
        quantity:document.getElementById("quantity").value,
        images:imgs,
        price:document.getElementById("price").value
    }
    console.log(content);
    
    try {
        const res=await fetch("http://localhost:4000/api/mobiles/update",{
            method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(content)
        })
        console.log(res);
        
        const data=await res.json()
        console.log(data);
        if (res.status===201) {
            alert("Sucessfully submitted")
            window.location.href="/"
            console.log("h9hihuiuh");
            
        }
        console.log("sdf");
        
        
    } catch (error) {
        console.log(error);
        alert("not submitted")
    }
    
}


document.getElementById("images").addEventListener("change",async(e)=>{
    let files=e.target.files
    console.log(files);
    imgs=[]
    let str=""
    for(let file of files){
        let res=await convertBase64(file)
        imgs.push(res)
        str+=`
        <img src="${res}" alt="selected mobile" id="imgs" style="width:200px">`
    }
    document.getElementById("previewimages").innerHTML=str
})

function convertBase64(file){
    return new Promise((res,rej)=>{
        const fileReader=new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            res(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            rej(error)
        }
    })
}
