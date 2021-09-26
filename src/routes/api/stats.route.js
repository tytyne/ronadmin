import express from "express"
import statsController from "../../controllers/statsController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()

router.get("/stats",statsController.numbers)
export default router;