import express from "express"
import {add, load, preview,deletedata, updatedata} from "../controllers/mobile_controller.js"

const mobRoute=express.Router()

mobRoute.post("/add",add)
mobRoute.get("/load",load)
mobRoute.get("/preview/:id",preview)
mobRoute.get("/delete/:id",deletedata)
mobRoute.post("/update/:id",updatedata)


export default mobRoute