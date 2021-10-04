import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import broadTypecontroller from "../../controllers/broadcastTypetargetController"
const router = express.Router()

router.get("/broadtype/all",broadTypecontroller.allBroadcastType)

export default router;