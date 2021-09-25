import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const getDiscussionUserById=async(data)=>{
    try{

        let pool = await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('DiscussionSpace_User')
        const result = await pool.request().input('DiscussionSpaceId',sql.Int,data).query(sqlQueries.list)
        return result.recordset
    }
    catch(error){
        console.log(error.message)
    }

}
export default {getDiscussionUserById}