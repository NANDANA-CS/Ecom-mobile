import mongoose from "mongoose"


const cartSchema = new mongoose.Schema({
    mobname: {type: String, required: true},
    brandname:  {type: String, required: true},
    ram:  {type: String, required: true},
    storage:  {type: String, required: true},
    color:  {type: String, required: true},
    images:  {type: String, required: true},
    price:  {type: Number, required: true},
    quantity: {type: Number, required: true}
})

export default mongoose.model.carts || mongoose.model("cart",cartSchema)