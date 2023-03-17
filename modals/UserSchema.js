const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLenght: 4
    }

})


const UserModal = mongoose.model('UsersInfo', Userinfo);

module.exports = UserModal;