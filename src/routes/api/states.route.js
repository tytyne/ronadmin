import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import statesController from "../../controllers/statesController";
const router = express.Router()
router.get("/state/all",checkAdmin.isAdmin,statesController.allStates)
router.delete("/state/:id",checkAdmin.isAdmin,statesController.deletingState)
router.post("/state/store",checkAdmin.isAdmin,statesController.createState)
router.put("/state/:id",checkAdmin.isAdmin,statesController.updatingState)
export default router;