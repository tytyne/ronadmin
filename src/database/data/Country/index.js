import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getCountry=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Country');
        const data = await pool.request().query(sqlQueries.CountryList);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}

export default {getCountry}