import express from "express"
import broadcastController from "../../controllers/broadcastContoller"
import checkAdmin from "../../middlewares/checkAdmin"
const multer = require('multer')
const inMemoryStorage = multer.memoryStorage();
const singleFileUpload = multer({ storage: inMemoryStorage });
const router = express.Router()


// router.get('/broadcasts',checkAdmin.isAdmin,broadcastController.getPost);
// router.get('/broadcastByInput',checkAdmin.isAdmin,broadcastController.getBroadcastPostByInput)
// router.get('/broadcast/:id',checkAdmin.isAdmin,broadcastController.getPostById);
// router.post('/broadcast',checkAdmin.isAdmin,singleFileUpload.single('image'),broadcastController.createPost)
// router.post('/broadcast/video',checkAdmin.isAdmin,broadcastController.postVideo)
// router.delete('/broadcast/:id',checkAdmin.isAdmin,broadcastController.deletePost)
// router.put("/update/broadcast/:id",checkAdmin.isAdmin,singleFileUpload.single('image'),broadcastController.updateBroadcast)
//without token


router.get('/broadcasts',broadcastController.getPost);
router.get('/broadcastByInput',broadcastController.getBroadcastPostByInput)
router.get('/broadcast/:id',broadcastController.getPostById);
router.post('/broadcast',singleFileUpload.single('image'),broadcastController.createPost)
router.post('/broadcast/video',broadcastController.postVideo)
router.delete('/broadcast/:id',broadcastController.deletePost)
router.put("/update/broadcast/:id",singleFileUpload.single('image'),broadcastController.updateBroadcast)

export default router;