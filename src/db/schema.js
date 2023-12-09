import mongoose from "mongoose";

const mymodel = new mongoose.Schema({
   
name :String,
email: String,
age : Number
});

export const Aschema = mongoose.models.CollectionOne || mongoose.model("CollectionOne" , mymodel)