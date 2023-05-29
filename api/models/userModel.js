import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    
    username: {
        type:String,
        requied: true,
        unique: true,
    },
    email: {
        type:String,
        requied: true,
        unique: true
        
    },
    password: {
        type:String,
        requied: true,
        
    },
    
    img: {
        type:String,
        requied: false,
        
    },
    country: {
        type:String,
        requied: false,
        
    },
    phone: {
        type:String,
        requied: false,
        
    },
    desc: {
        type:String,
        requied: false,
        
    },
    isSeller: {
        type:Boolean,
        default: false
        
    },
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema);