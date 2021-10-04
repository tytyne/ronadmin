import express from "express"
import checkAdmin from "../../middlewares/checkAdmin"
import nominationCategoryController from "../../controllers/nominationCategoryController";
const router = express.Router()
router.get("/nominationcategory/all",nominationCategoryController.allNominationCategories)
router.delete("/nominationcategory/:id",nominationCategoryController.deletingNominationCategory)
router.post("/nominationcategory/store",nominationCategoryController.createNominationCategory)
router.put("/nominationcategory/update/:id",nominationCategoryController.updatingNominationCategory)
export default router;