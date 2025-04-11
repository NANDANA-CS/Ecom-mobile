import express from "express"
import {add, load, preview,deletedata, update} from "../controllers/mobile_controller.js"

const mobRoute=express.Router()

mobRoute.post("/add",add)
mobRoute.get("/load",load)
mobRoute.get("/preview/:id",preview)
mobRoute.get("/delete/:id",deletedata)
// mobRoute.post("/update/:id",update)
mobRoute.post("/update", update);

export default mobRoute