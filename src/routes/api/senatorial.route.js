import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"

import senatorialController from "../../controllers/senatorialController";
const router = express.Router()
router.get("/senatorial/all",senatorialController.allSenatorialDistrict)
router.delete("/senatorial/:id",senatorialController.deletingSenatorial)
router.post("/senatorial/store",senatorialController.createSenatorial)
router.put("/senatorial/update/:id",senatorialController.updatingSenatorial)

const router = express.Router()


export default router;