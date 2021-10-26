import express from "express"
import statsController from "../../controllers/statsController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()

router.get("/stats",checkAdmin.isAdmin,statsController.numbers)
export default router;