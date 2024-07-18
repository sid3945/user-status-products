const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {type: String, required: true, enum: ["admin", "customer", "employee"]},
    active: {type: Boolean, required: true},
    email: {type: String, required: true, unique: true},
    createdAt: {type: Date, required: true},
    id: {type: Number, required: true},
    name: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);
module.exports = User;