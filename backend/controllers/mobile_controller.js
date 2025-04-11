import mobSchema from "../models/mobilemodel.js"

export const add=async (req,res) => {
    console.log("add product");

    const {mobname,brandname,ram,storage,color,quantity,images,price}=req.body
    console.log(req.body);

    try{
        if(!(mobname&&brandname&&ram&&storage&&color&&quantity&&images&&price)){
            return res.status(404).send("please fill all fields")
        }
        const data=await mobSchema.create({mobname,brandname,ram,storage,color,quantity,images,price})
        res.status(201).send(data)
    }catch(error){
        console.log(error);
        
    }
}

export const load=async (req,res) => {
    try {
        const data=await mobSchema.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        
    }
}

export const preview=async (req,res) => {
    const {id}=req.params
    console.log(id);
    try {
        const data=await mobSchema.findOne({_id:id})
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        
    }
}

export const deletedata=async (req,res) => {
    try {
        const {id}=req.params
        const data=await mobSchema.findByIdAndDelete(id,{new:true})
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
        
    }
}

export const updatedata=async (req,res) => {
    try {
        const { id } = req.params
        let { mobname, brandname, ram, storage, color, quantity, images, price } = req.body
        const data=await mobSchema.findByIdAndDelete(
            id,
            { mobname, brandname, ram, storage, color,quantity, images, price },
            { new: true }
        )
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        
    }
}