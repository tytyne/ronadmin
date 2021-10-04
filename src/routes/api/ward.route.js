import express from "express"
import wardController from "../../controllers/wardController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()

router.get("/ward/all",wardController.allWards)
router.delete("/ward/:id",wardController.deletingWard)
router.post("/ward/store",wardController.createWard)
router.put("/ward/update/:id",wardController.updatingWard)

export default router;