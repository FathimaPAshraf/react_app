const mongoose = require("mongoose");

const notesSchema = {
    name: String,
    email: String,
    phone: String,
    psw: String
}

const Note=mongoose.model("Note", notesSchema);
module.exports=Note;