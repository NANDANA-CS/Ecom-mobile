import express from "express"
import path from "path"
import url from "url"
import connectDB from "./connection.js"
import mobRoute from "./routes/mobile_routes.js"

const port=4000
const __filename=url.fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const frontend=path.join(__dirname,"..","frontend")

const app=express()
app.use(express.static(frontend))
app.use(express.json({limit:"200mb"}))
app.use("/api/mobiles",mobRoute)

app.get("/add",(req,res)=>{
    try{
        res.status(200).sendFile(path.join(frontend,"add.html"))
    }catch(err){
        res.status(400).send("page not found",err)    
    }
})

app.get("/preview",(req,res)=>{
    try{
        res.status(200).sendFile(path.join(frontend,"preview.html")) 
    }catch(error){
        console.log(error);
        
    }
})

app.get("/update",(req,res)=>{
    try {
        res.status(200).sendFile(path.join(frontend,"update.html"))
    } catch (error) {
        console.log(error);
        res.status(404).send("page not found",error)
    }
})

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server running on http://localhost:${port}`); 
    })
}).catch((err)=>{
    console.log(err);
    
})
