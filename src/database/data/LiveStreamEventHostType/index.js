import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const getEventHostType = async(data)=>{
    try{
        let pool =await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('LiveStreamEventHostType')
        const result = await pool.request().input('HostType',sql.NVarChar(250),data)
        .query(sqlQueries.hostTypeByName)
        return result.recordset
    }
    catch(error)
    {
        console.log(error.message)
    }
 

}
const allHostTypes = async()=>{
    try{
        let pool =await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('LiveStreamEventHostType')
        const result = await pool.request().query(sqlQueries.allHostType);
        return result.recordset
    }
    catch(error)
    {
        console.log(error.message)
    }
 

}
export default {getEventHostType,allHostTypes}