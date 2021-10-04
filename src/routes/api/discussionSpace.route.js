import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import dicussionSpaceController from "../../controllers/discussionSpacesOwnerController"
const router = express.Router()
router.get("/discussionspace/all",dicussionSpaceController.allDiscussionSpaceOwner)

export default router;