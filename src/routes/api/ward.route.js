import express from "express"
import wardController from "../../controllers/wardController"
import checkAdmin from "../../middlewares/checkAdmin"
const router = express.Router()

router.get("/ward/all",checkAdmin.isAdmin,wardController.allWards)
router.delete("/ward/:id",checkAdmin.isAdmin,wardController.deletingWard)
router.post("/ward/store",checkAdmin.isAdmin,wardController.createWard)
router.put("/ward/update/:id",checkAdmin.isAdmin,wardController.updatingWard)

export default router;