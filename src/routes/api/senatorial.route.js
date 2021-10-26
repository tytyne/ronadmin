import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import senatorialController from "../../controllers/senatorialController";
const router = express.Router()
router.get("/senatorial/all",checkAdmin.isAdmin,senatorialController.allSenatorialDistrict)
router.delete("/senatorial/:id",checkAdmin.isAdmin,senatorialController.deletingSenatorial)
router.post("/senatorial/store",checkAdmin.isAdmin,senatorialController.createSenatorial)
router.put("/senatorial/update/:id",checkAdmin.isAdmin,senatorialController.updatingSenatorial)

export default router;