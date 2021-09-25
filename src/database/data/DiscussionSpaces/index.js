import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const getDiscussionByName=async(data)=>{
    try{

        let pool = await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('DiscussionSpaces')
        const result = await pool.request().input('Name',sql.NVarChar(250),data).query(sqlQueries.discussionSpacesByName)
        return result.recordset
    }
    catch(error){
        console.log(error.message)
    }

}

const getAllDiscussions=async()=>{
    try{

        let pool = await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('DiscussionSpaces')
        const result = await pool.request().query(sqlQueries.allDiscussionSpace)
        return result.recordset
    }
    catch(error){
        console.log(error.message)
    }

}
const countingDiscussions=async()=>{
    try{

        let pool = await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('DiscussionSpaces')
        const result = await pool.request().query(sqlQueries.countDiscussionSpaces)
        return result.recordset
    }
    catch(error){
        console.log(error.message)
    }

}

export default {getDiscussionByName,getAllDiscussions,countingDiscussions}