const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema({
    packid: String,
    packname: String,
    pprice: Number,
    description: String,
    ttype: String,
    status: String,
    packimage: {
        data: Buffer,
        contentType: String,
    }
});

const stageModel = mongoose.model("Stage", stageSchema);
module.exports = stageModel;