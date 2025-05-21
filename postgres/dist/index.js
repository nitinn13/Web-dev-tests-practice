"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client({
    user: "intro_owner",
    password: "npg_Q2StsqLru4Ff",
    host: "ep-green-snowflake-a4x16b4u-pooler.us-east-1.aws.neon.tech",
    database: "intro",
    port: 5432,
    ssl: true,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pgClient.connect();
        console.log("Connected to DB");
    }
    catch (err) {
        console.error("DB connection error", err);
    }
}))();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    const { city, country, street, pincode } = req.body;
    try {
        const insertquery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id`;
        const insertresult = yield pgClient.query(insertquery, [username, password, email]);
        const user_id = insertresult.rows[0].id;
        const addressinsertquery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`;
        const addressinsertqueryresult = yield pgClient.query(addressinsertquery, [city, country, street, pincode, user_id]);
        res.status(200).json({
            message: "success"
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
app.listen(3000, () => {
    console.log("server started");
});
