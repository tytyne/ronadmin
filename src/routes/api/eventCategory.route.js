import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import eventCategoryController from "../../controllers/eventCategoryContoller"
const router = express.Router()
router.get("/eventcategories/all",checkAdmin.isAdmin,eventCategoryController.allEventCategory)

export default router;