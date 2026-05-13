import mongoose from "mongoose";

const veterinarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        default: null,
        trim: true,
    },
    web: {
        type: String,
        default: null,
    },
    token: {
        type: String,
        default: null,
    },
    confirm: {
        type: Boolean,
        default: false,
    }
});

const Veterinary = mongoose.model('Veterinary', veterinarySchema);
export default Veterinary;