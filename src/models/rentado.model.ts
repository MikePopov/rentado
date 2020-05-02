import mongoose from "mongoose";

const FlatSchema = new mongoose.Schema({
    name: String,
    rooms: Number,
    price: Number,
    photo: String
});

export const Flat = mongoose.model("Flat", FlatSchema);