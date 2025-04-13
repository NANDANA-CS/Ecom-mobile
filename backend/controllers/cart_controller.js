import cartSchema from "../models/cartmodels.js"


// export const addcart = async function(req, res){
//     const {...content} = req.body
//     console.log(content);
     
//     try {
//         if (!(content.mobname && content.brandname && content.ram && content.storage && content.color && content.images && content.price && content.quantity)) {
//             return res.status(404).send(error)
//         }
//         const data = await cartSchema.create(content)
//         res.status(201).send(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


export const loaddata = async function(req, res){
    try {
        const data = await cartSchema.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send("Error to fetch")
        console.log(error)
    }
}

export const getdata = async function(req, res){
    const { mobname, brandname } = req.body
    console.log(req.body,"inside getdata")
    try {
        const data = await cartSchema.find({mobname,brandname})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send("Error to fetch")
        console.log()
    }
}

export const plus = async (req, res) => {
    console.log("inside plus")
    console.log(req.body)
    try {
        const { _id } = req.params
        console.log(_id, "\n",{_id})
        let { quantity } = req.body
        const data = await cartSchema.findByIdAndUpdate(
            _id,
            { quantity },
            { new: true }
        )
        res.status(200).send(data)
    } catch (err) {
        res.status(500).send({err: "not increasing"})
    }
}

export const minus = async (req, res) => {
    console.log("inside plus")
    console.log(req.body)
    try {
        const { _id } = req.params
        console.log(_id, "\n",{_id})
        let { quantity } = req.body
        const data = await cartSchema.findByIdAndUpdate(
            _id,
            { quantity },
            { new: true }
        )
        res.status(200).send(data)
    } catch (err) {
        res.status(500).send({err: "not decreasing"})
    }
}

export const removeitem = async (req, res) => {
    const { _id } = req.params
    try {
        const deleted = await cartSchema.findByIdAndDelete(_id)
        if (!deleted) return res.status(404).send({ error: "Item not found" })
        res.status(200).send({ message: "Item removed" })
    } catch (error) {
        res.status(500).send({ error: "Error removing item" })
    }
}


export const addcart = async function(req, res){
    const {...content} = req.body;
     
    try {

        if (!(content.mobname && content.brandname && content.ram && content.storage && content.color && content.images && content.price && content.quantity)) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const data = await cartSchema.create(content);
        res.status(201).json(data);
    } catch (error) {
        console.error("Error in addcart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}