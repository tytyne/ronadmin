import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import lgaController from "../../controllers/lgaController";
const router = express.Router()
router.get("/lga/all",checkAdmin.isAdmin,lgaController.allLga)
router.delete("/lga/:id",checkAdmin.isAdmin,lgaController.deletingLga)
router.post("/lga/store",checkAdmin.isAdmin,lgaController.createLga)
router.put("/lga/update/:id",checkAdmin.isAdmin,lgaController.updatingLga)

export default router;