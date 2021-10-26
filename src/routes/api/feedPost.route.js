import express from "express"
import FeedpostController from "../../controllers/feedPostController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()


router.get("/feedPosts",FeedpostController.getAllFeedPosts)


export default router;