import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true

    },
    description:{
        type:String,
      
    },
    ImgUrl:{
        type:String,
     
    }
})
export const Recipe = mongoose.model("User",recipeSchema);