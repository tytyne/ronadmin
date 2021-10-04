import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import lgaController from "../../controllers/lgaController";
const router = express.Router()
router.get("/lga/all",lgaController.allLga)
router.delete("/lga/:id",lgaController.deletingLga)
router.post("/lga/store",lgaController.createLga)
router.put("/lga/update/:id",lgaController.updatingLga)

export default router;