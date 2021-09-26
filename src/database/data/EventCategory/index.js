import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getEventCategory=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('EventCategory');
        const data = await pool.request().query(sqlQueries.list);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}

export default {getEventCategory}