const mongoose = require("mongoose");

let food = mongoose.Schema;
const foodSchema =new food ({
    
    Foodname: String,
    Foodtype: String,
    Amount: Number,
    Description: String,
    Eventid:{type:mongoose.Schema.Types.ObjectId,ref:'Events'},
    Foodimage: {
        data: Buffer,
        contentType: String,
    },
    status: String
});

const foodModel = mongoose.model("Food", foodSchema);
module.exports = foodModel;