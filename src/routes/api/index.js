import express from "express"
import Admin from "./admin.route"
import Event from "./event.route"
import Speaker from "./speaker.route"
import Broadcast from "./broadcast.route"
import User from "./user.route"
import Host from "./hostType.route"
import Discussion from "./discussion.route"
import Group from "./group.route"
import UserActivity from "./userActivity.route"
import About from "./about.route"
import Stats from "./stats.route"
import Ward from "./ward.route"
import Federal from "./federal.route"
import State from "./states.route"
import Senatorial from "./senatorial.route"
import NominationCategory from "./nominationCategory.route"
import StateHouse from "./stateHouse.route"
import Lga from "./lga.route"
import Gateway from "./gateway.route"
import Country from "./country.route"
import BroadcastType from "./brodcastType.route"
import DiscussionSpaceOwner from "./discussionSpaceOwner.route"
import ElectedPosition from "./electedPosistion.route"
import DiscussionSpace from "./discussionSpace.route"
import EventHostType from "./hostType.route"
import EventCategory from "./eventCategory.route"
import NotificationType from "./notificationType.route"
import DonationTypes from "./donationType.route"
import Donation from "./donation.route"
import FeedPost from "./feedPost.route"
const router = express.Router()

router.use("/",Admin)
router.use("/",Event)
router.use("/",User)
router.use("/",Speaker)
router.use("/",Broadcast)
router.use("/",Host)
router.use("/",Discussion)
router.use("/",Group)

router.use("/",About)
router.use("/",Stats)
router.use("/",Ward)
router.use("/",State)
router.use("/",Federal)
router.use("/",Senatorial)
router.use("/",StateHouse)
router.use("/",Lga)
router.use("/",Gateway)
router.use("/",Country)
router.use("/",BroadcastType)
router.use("/",DiscussionSpaceOwner)
router.use("/",ElectedPosition)
router.use("/",DiscussionSpace)
router.use("/",DiscussionSpaceOwner)
router.use("/",DiscussionSpace)
router.use("/",EventHostType)
router.use("/",EventCategory)
router.use("/",NotificationType)
router.use("/", NominationCategory)
router.use("/",DonationTypes)
router.use("/",Donation)
router.use("/",UserActivity)
router.use("/",FeedPost)

export default router;