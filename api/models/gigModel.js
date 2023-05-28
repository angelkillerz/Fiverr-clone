import mongoose from "mongoose";

const GigSchema = new mongoose.Schema({

}, {
    timestamps:true
})


export default mongoose.model("Gig", GigSchema)