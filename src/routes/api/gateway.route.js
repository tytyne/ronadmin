import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import gatewayController from "../../controllers/gatewayController";
const router = express.Router()
router.get("/gateway/all",checkAdmin.isAdmin,gatewayController.allGateway)
router.delete("/gateway/:id",checkAdmin.isAdmin,gatewayController.deletingGateway)
router.post("/gateway/store",checkAdmin.isAdmin,gatewayController.createGateway)
router.put("/gateway/update/:id",checkAdmin.isAdmin,gatewayController.updatingGateway)

export default router;