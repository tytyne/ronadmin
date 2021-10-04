import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import electedPositionController from "../../controllers/electedPositionController"
const router = express.Router()
router.get("/electedposition/all",electedPositionController.allElectedPosition)

export default router;