const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: [true, 'Silahkan  Isikan Nama'],
        unique: true
    },
    kelas:{
        type: String,
        required: [true, 'Silahkan  Isikan Kelas'],
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        , 'Silahkan Isikan Email']
    }
})

module.exports = mongoose.model('User', UserSchema)