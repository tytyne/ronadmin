import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import federalController from "../../controllers/federalController";
const router = express.Router()
router.get("/federal/all",federalController.allFederals)
router.delete("/federal/:id",federalController.deletingFederal)
router.post("/federal/store",federalController.createFederal)
router.put("/federal/update/:id",federalController.updatingFederal)
export default router;