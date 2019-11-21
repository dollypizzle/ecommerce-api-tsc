"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var cartSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    owner: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' },
}, { timestamps: true });
var Cart = mongoose_1.model('Cart', cartSchema);
exports.default = Cart;
