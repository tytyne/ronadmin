import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"

import gatewayController from "../../controllers/gatewayController";
const router = express.Router()
router.get("/gateway/all",gatewayController.allGateway)
router.delete("/gateway/:id",gatewayController.deletingGateway)
router.post("/gateway/store",gatewayController.createGateway)
router.put("/gateway/update/:id",gatewayController.updatingGateway)

const router = express.Router()


export default router;