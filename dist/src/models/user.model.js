"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: false },
    password: { type: String, required: false },
    googleId: { type: String, resquired: false },
    profilePicture: { type: String, required: false },
    isManualAuth: { type: Boolean, default: false }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('user', schema);
