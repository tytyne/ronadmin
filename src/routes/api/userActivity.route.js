import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import UserActivityController from "../../controllers/userActivityController"
const router = express.Router()

router.get("/activities",UserActivityController.allActivity)


export default router;