import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import nominationTypeController from "../../controllers/nominationCategoryController"
import notificationController from "../../controllers/notificationController"
const router = express.Router()
router.get("/notificationtype/all", notificationController.allNotifications)
export default router;