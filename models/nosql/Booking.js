const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")
const bookingScheme = new mongoose.Schema(
    {
        booking_id:{
            type:Number
        },
        booking_user_id:{
            type:Number,
            unique:true
        },
        booking_flight_id:{
            type:Number
        },
        booking_date:{
            type:Date
        },
        booking_time:{
            type:Number
        },
        booking_state:{
            type:["Pendiente","Confirmada","Cancelada","En proceso"],
            default:"Pendiente"
        },
        booking_price:{
            type:Number
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

bookingScheme.plugin(mongooseDelete, {overrideMethods:'all'});
module.exports = mongoose.model("bookings",bookingScheme)