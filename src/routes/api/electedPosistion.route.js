import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import electedPositionController from "../../controllers/electedPositionController"
const router = express.Router()
router.get("/electedposition/all",checkAdmin.isAdmin,electedPositionController.allElectedPosition)

export default router;