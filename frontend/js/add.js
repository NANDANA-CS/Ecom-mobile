let imgs=[]
let content=null

console.log("Herre");


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
        const res=await fetch("http://localhost:4000/api/mobiles/add",{
            method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(content)
        })
        console.log(res);
        
        const data=await res.json()
        console.log(data);
        if (res.status===201) {
            alert("Sucessfully submitted")
            window.location.href="/"
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

