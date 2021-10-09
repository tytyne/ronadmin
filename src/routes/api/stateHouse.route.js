import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"

import stateHouseController from "../../controllers/statehouseController";
const router = express.Router()
router.get("/statehouse/all",stateHouseController.allStatehouse)
router.delete("/statehouse/:id",stateHouseController.deletingStatehouse)
router.post("/statehouse/store",stateHouseController.createStatehouse)
router.put("/statehouse/update/:id",stateHouseController.updatingStatehouse)

const router = express.Router()


export default router;