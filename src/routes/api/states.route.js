import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import statesController from "../../controllers/statesController";
const router = express.Router()
router.get("/state/all",statesController.allStates)
router.delete("/state/:id",statesController.deletingState)
router.post("/state/store",statesController.createState)
router.put("/state/update/:id",statesController.updatingState)
export default router;