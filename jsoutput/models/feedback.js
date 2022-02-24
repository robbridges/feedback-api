"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// this interface seems much more simple than the user model. We'll probably add more to it, but for now it works. NO need to overcomplicate with unused fuctionality yet
var feedbackSchema = new mongoose_1.Schema({
    rating: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
    },
}, {
    timestamps: true,
});
var feedBack = (0, mongoose_1.model)('Feedback', feedbackSchema);
module.exports = feedBack;
