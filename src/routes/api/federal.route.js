import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import federalController from "../../controllers/federalController";
const router = express.Router()
router.get("/federal/all",checkAdmin.isAdmin,federalController.allFederals)
router.delete("/federal/:id",checkAdmin.isAdmin,federalController.deletingFederal)
router.post("/federal/store",checkAdmin.isAdmin,federalController.createFederal)
router.put("/federal/:id",checkAdmin.isAdmin,federalController.updatingFederal)
export default router;