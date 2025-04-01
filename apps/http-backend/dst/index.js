"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({
        message: "hy there it is working "
    });
});
app.post("/signup", async (req, res) => {
    console.log("hy thereeeee");
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    console.log("passed");
    const user = await client_1.client.user.create({
        data: {
            username,
            password
        }
    });
    res.json({
        "message": "youhave signed up",
        "id": user.id
    });
});
app.listen(3001);
