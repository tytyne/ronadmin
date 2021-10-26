
import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const createSpeaker=async(speakerdata)=>{
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('LiveStreamEventSpeaker')
        const insert=await pool.request()
        .input('Email', sql.VarChar(500), speakerdata.Email)
        .input('UserID', sql.BigInt, speakerdata.UserID)
        .input('LiveStreamEventID', sql.UniqueIdentifier, speakerdata.LiveStreamEventID)
        .input('Name', sql.VarChar(500), speakerdata.Name)
        .input('Phone', sql.VarChar(50), speakerdata.Phone)
        .input('About', sql.VarChar(1000), speakerdata.About)
        .input('Moderator', sql.Bit, speakerdata.Moderator)
        .input('Title', sql.VarChar(500), speakerdata.Title)
        .input('CreatedBy', sql.Int, speakerdata.CreatedBy)
        .input('Created', sql.DateTime, speakerdata.Created)
        .input('UpdatedBy', sql.Int, speakerdata.UpdatedBy)
        .input('Updated', sql.DateTime, speakerdata.Updated)
        .query(sqlQueries.createSpeaker);
        return insert.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}
const updatingSpeaker=async(Id,data)=>{
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('LiveStreamEventSpeaker')
        const updateData=await pool.request()
                            .input('Id', sql.Int, Id)
                            .input('Email', sql.VarChar(500),data.Email)
                            .input('UserID', sql.BigInt, data.UserID)
                            .input('LiveStreamEventID', sql.UniqueIdentifier, data.LiveStreamEventID)
                            .input('Name', sql.VarChar(500), data.Name)
                            .input('Phone', sql.VarChar(50), data.Phone)
                            .input('About', sql.VarChar(1000), data.About)
                            .input('Moderator', sql.Bit, data.Moderator)
                            .input('Title', sql.VarChar(500),data.Title)
      
                            .query(sqlQueries.updateSpeaker);
        return updateData.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

// const getSpeakers=async()=>{
//     try{
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('LiveStreamEventSpeaker');
//         const speakers = await pool.request().query(sqlQueries.speakerslist);
//         return speakers.recordset;
//     }
//     catch(error){
//         console.log(error.message)
//     }

// }
const getSpeakers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('LiveStreamEventSpeaker');
        const eventsList = await pool.request().query(sqlQueries.list);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getSpeakerById=async(speakerId)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('LiveStreamEventSpeaker');
        const speaker = await pool.request()
            .input('Id', sql.Int, speakerId)
            .query(sqlQueries.speakerById);
        return speaker.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

const getSpeakerByInput=async(speakerInput)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('LiveStreamEventSpeaker');
        const speaker = await pool.request()
            .input('Input',sql.NVarChar(100), speakerInput)
            .query(sqlQueries.speakerByInput);
        return speaker.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

const deleteSpeakerById=async(speakerId)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('LiveStreamEventSpeaker');
        const speaker = await pool.request()
            .input('Id', sql.Int, speakerId)
            .query(sqlQueries.deleteSpeaker);
        return speaker.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}


export default{createSpeaker,getSpeakers,getSpeakerById,getSpeakerByInput,deleteSpeakerById,updatingSpeaker}


