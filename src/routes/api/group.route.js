import express from "express"
import groupController from "../../controllers/targetGroupController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()


router.get("/groups",checkAdmin.isAdmin,groupController.getAll)



export default router;