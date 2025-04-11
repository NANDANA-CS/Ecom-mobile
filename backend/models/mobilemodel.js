import mongoose from "mongoose";
const mobSchema=new mongoose.Schema({
    mobname:{type:String,required:true},
    brandname:{type:String,required:true},
    ram:{type:String,required:true},
    storage:{type:String,required:true},
    color:{type:String,required:true},
    quantity:{type:String,required:true},
    images:{type:Array,required:true},
    price:{type:String,required:true},

})

export default mongoose.model.mobiles || mongoose.model("mobile",mobSchema)