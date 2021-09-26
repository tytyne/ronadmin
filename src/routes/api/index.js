import express from "express"
import Admin from "./admin.route"
import Event from "./event.route"
import Speaker from "./speaker.route"
import Broadcast from "./broadcast.route"
import User from "./user.route"
import Host from "./hostType.route"
import Discussion from "./discussion.route"
import Group from "./group.route"
import Trial from "./trial.route"
import About from "./about.route"
import Stats from "./stats.route"
const router = express.Router()

router.use("/",Admin)
router.use("/",Event)
router.use("/",User)
router.use("/",Speaker)
router.use("/",Broadcast)

router.use("/",Host)
router.use("/",Discussion)
router.use("/",Group)
router.use("/t1/",Trial)
router.use("/",About)
router.use("/",Stats)


export default router;