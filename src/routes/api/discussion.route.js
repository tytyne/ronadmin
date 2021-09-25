import express from "express"
import discussionController from "../../controllers/DiscussionController"
import checkAdmin from "../../middlewares/checkAdmin"


const router = express.Router()

router.get("/discussions",checkAdmin.isAdmin,discussionController.getAll)
router.get("/discussionByInput",checkAdmin.isAdmin,discussionController.getDiscussionByName)

export default router;