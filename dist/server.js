"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./db/mongoose");
const post_1 = require("./routers/post");
const get_1 = require("./routers/get");
const patch_1 = require("./routers/patch");
const delete_1 = require("./routers/delete");
const default_1 = require("./routers/default");
const app = express_1.default();
app.use(express_1.default.json());
app.use(post_1.postRouter);
app.use(get_1.getRouter);
app.use(patch_1.patchRouter);
app.use(delete_1.deleteRouter);
app.use(default_1.defaultRouter);
const port = process.env.PORT || 3100;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
//# sourceMappingURL=server.js.map