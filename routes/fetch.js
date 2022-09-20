import express from "express";
const router = express.Router;
import * as fetchCtrl from "../controllers/fetch";

router.get("/", fetchCtrl);
