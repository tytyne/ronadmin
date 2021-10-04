import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import DiscussionSpaceOwnerController from "../../controllers/discussionSpacesOwnerController";
const router = express.Router()
router.get("/spaceowner/all",DiscussionSpaceOwnerController.allDiscussionSpaceOwner)

export default router;