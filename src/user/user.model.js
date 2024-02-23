import mongoose from 'mongoose';

//Esquema
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true, //Solo puede existir un registro único.
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        mingLength: [8, 'Password must be 8 characters'],
        required: true
    },
    phone:{
        type: String,
        minLength: 8,
        maxLenght: 8,
        required: true
    },
    address: {
        type: String,
        requiered: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: ['ADMIN', 'CLIENT'], //Solo acepta los datos que estén el arreglo
        requiered: true
    }
})


//Pre Mongoose
//Plurilizar
export default mongoose.model('user', userSchema)