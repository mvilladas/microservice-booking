const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
    //check("booking_id").exists().notEmpty(),
    check("booking_user_id").exists().notEmpty(),
    check("booking_flight_id").exists().notEmpty(),
    check("booking_date").exists().notEmpty(),
    check("booking_time").exists().notEmpty(),
    check("booking_price").exists().notEmpty(),
    check("booking_state").exists().notEmpty(),
    (req,res,next)=>{
        return validateResults(req,res,next);
    }
];
const validatorGetItem =[
    check("id").exists().notEmpty().isMongoId(),
    (req,res,next)=>{
        return validateResults(req,res,next);
    }
]

module.exports = {validatorCreateItem,validatorGetItem}