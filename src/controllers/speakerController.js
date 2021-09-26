import SpeakerData from "../database/data/LiveStreamEventSpeaker";
import EventData from "../database/data/Events";
import UserData from "../database/data/User";
import DiscussionSpaceUserData from "../database/data/DiscussionSpace_User";
import Mailer from "../utils/mail/email";
import {
  makeModerator,
  makeEmailArray,
  makeIdArray,
  makeFirstnameArray,
  makeLastnameArray,
  makeUserIdArray,
} from "../utils/makeResponse";

class speakerController {
  static async createSpeaker(req, res, next) {

    try {
      let { LiveStreamEventID, Email, Name, Phone, About, Title, Moderator } = req.body;
      let emailArray, firstnameArray, lastnameArray, idArray;
      let checkUser;
      const users = await UserData.getUsers();
      console.log(users);
      let event = await EventData.getById(LiveStreamEventID);
      const user = await UserData.getUserByEmail(Email);
      if (user.length === 0) {
        console.log(user);
        checkUser = 0;
      } 
      else checkUser = user[0].Id;

      let moderator = makeModerator(Moderator);

      const speakers = await SpeakerData.createSpeaker({
        Email,
        UserID: checkUser,
        LiveStreamEventID,
        Name,
        Phone,
        About,
        Moderator: moderator,
        Title,
        CreatedBy: 1,
        Created: new Date(),
        UpdatedBy: 1,
        Updated: new Date(),
      });
      const discUser = await DiscussionSpaceUserData.getDiscussionUserById(
        event[0].HostDiscussionSpaceId
      );
      console.log(discUser);

      if (event[0].HostType === "1" || event[0].HostType === "3") {
        //send emails to the user in that particular discussionSpace
        emailArray = makeEmailArray(discUser);
        idArray = makeUserIdArray(discUser);
        firstnameArray = makeFirstnameArray(discUser);
        lastnameArray = makeLastnameArray(discUser);
        console.log(emailArray);
        console.log(idArray);
        console.log(firstnameArray);
        console.log(lastnameArray);
        console.log(emailArray.map((a) => a.Email));
        console.log(idArray.map((a) => a.UserID));
        console.log(firstnameArray.map((a) => a.FirstName));
        console.log(lastnameArray.map((a) => a.LastName));
      }
      //sent to all general users
      else 
      console.log(users);
      emailArray = makeEmailArray(users);
      idArray = makeIdArray(users);
      firstnameArray = makeFirstnameArray(users);
      lastnameArray = makeLastnameArray(users);
      console.log(emailArray);
      console.log(idArray);
      console.log(firstnameArray);
      console.log(lastnameArray);
      console.log(emailArray.map((a) => a.Email));
      console.log(idArray.map((a) => a.Id));
      console.log(firstnameArray.map((a) => a.FirstName));
      console.log(lastnameArray.map((a) => a.LastName));
      //sample data to send emails
      let id_array = ["1", "2", "3"];
      let email_array = [
        "dusaflora@yahoo.fr",
        "dusaflora2@gmail.com",
        "fimbofinance@gmail.com",
      ];
      let name_array = ["florentine", "tytyne", "dusabe"];

      for (let i = 0; i < email_array.length; i++) {
        const mail = new Mailer({
          to: email_array[i],
          name: name_array[i],
          eventdate: `${event[0].EventStartTime}`,
          eventitle: `${event[0].EventTitle}`,
          eventdescription: `${event[0].EventDescription}`,
          optionLinkAccept: `${process.env.APP_URL}/rsvp?u=${id_array[i]}&ev=${event[0].Id}&rsvp=1`,
          optionLinkDecline: `${process.env.APP_URL}/rsvp?u=${id_array[i]}&ev=${event[0].Id}&rsvp=0`,
        });
        await mail.sendMail();
      }

      return res
        .status(200)
        .json({ message: "event speaker created successfully!", speakers });
    } catch (err) {
      return next(new Error(err));
    }
  }

  static async updateSpeaker(req, res, next) {
      try {

          const speakerId =  req.params.id;
          const data = req.body;
          const speaker= await SpeakerData.getSpeakerById(speakerId)
          if (speaker.length === 0)
          return res.status(400).json({ error: "no speaker found" })
          const user = await UserData.getUserByEmail(data.Email)
          if(user.length===0){
             data.UserID=0
          }
          else
              data.UserID=user[0].Id

          if (req.body.Moderator) {
              data.Moderator = makeModerator(req.body.Moderator);
              console.log("hello",makeModerator(req.body.Moderator))
            }
          const updated = await SpeakerData.updatingSpeaker(speakerId, data);
          res.send(updated);

       }
      catch (err) {
          return next(new Error(err))
      }
  }

  static async getSpeakerById(req, res, next) {
      try {
          const speakerId = req.params.id;
          const speaker = await SpeakerData.getSpeakerById(speakerId);
          if (speaker.length === 0)
              return res.status(400).json({ error: "no speaker found" })
          else
              return res.status(200).json({ message: "the speaker", speaker })
      }

      catch (err) {
          return next(new Error(err))
      }
  }

  static async getSpeakerByInput(req, res, next) {
      try {
          const input = req.query.input;
          const speaker = await SpeakerData.getSpeakerByInput(input);
          console.log(speaker)
          return res.status(200).json({ message: "the speaker",speaker })

      }
      catch (err) {
          return next(new Error(err))
      }
  }

  static async getSpeakers(req, res, next) {
      try {
          const speakerlist = await SpeakerData.getSpeakers();
          console.log(speakerlist)
              return res.status(200).json(speakerlist)
      }
      catch (err) {
        return next(new Error(err))
    }
  }

  static async deleteSpeaker(req,res,next){
      try {
          const speakerId = req.params.id;
          const speaker = await SpeakerData.getSpeakerById(speakerId)
          if(speaker.length===0) return res.status(400).json({error:"no speaker with that Id"})
              await SpeakerData.deleteSpeakerById(speakerId);

          return res.status(200).json({ message: "the  speaker deleted successfully!" });

      } catch (err) {
          return next(new Error(err))
      }
  }
}
export default speakerController;
