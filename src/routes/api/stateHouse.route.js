import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import stateHouseController from "../../controllers/statehouseController";
const router = express.Router()
router.get("/statehouse/all",checkAdmin.isAdmin,stateHouseController.allStatehouse)
router.delete("/statehouse/:id",checkAdmin.isAdmin,stateHouseController.deletingStatehouse)
router.post("/statehouse/store",checkAdmin.isAdmin,stateHouseController.createStatehouse)
router.put("/statehouse/update/:id",checkAdmin.isAdmin,stateHouseController.updatingStatehouse)
export default router;