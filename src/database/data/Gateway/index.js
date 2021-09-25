import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getGateWay=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Gateway');
        const data = await pool.request().query(sqlQueries.List);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}

export default {getGateWay}