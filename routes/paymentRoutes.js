import express from "express"
import { checkout, paymentVerifaction } from "../controllers/paymentController.js";

const router = express.Router()


router.route("/checkout").post(checkout)
router.route("/paymentVerification").post(paymentVerifaction)


export default router;