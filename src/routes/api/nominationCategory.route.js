import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import nominationCategoryController from "../../controllers/nominationCategoryController";
const router = express.Router()
router.get("/nominationcategory/all",checkAdmin.isAdmin,nominationCategoryController.allNominationCategories)
router.delete("/nominationcategory/:id",checkAdmin.isAdmin,nominationCategoryController.deletingNominationCategory)
router.post("/nominationcategory/store",checkAdmin.isAdmin,nominationCategoryController.createNominationCategory)
router.put("/nominationcategory/update/:id",checkAdmin.isAdmin,nominationCategoryController.updatingNominationCategory)
export default router;