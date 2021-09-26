import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getSTatehouse=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('StatehouseConstituency');
        const data = await pool.request().query(sqlQueries.StatehouseList);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}
const storeStatehouse = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('StatehouseConstituency');
        const insertPost = await pool.request()
            .input('ShcName', sql.NVarChar(150), data.ShcName)
            .input('Created', sql.DateTime, data.Created)
            .query(sqlQueries.createStatehouse);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('StatehouseConstituency')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteStatehouse)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}


export default {getSTatehouse,storeStatehouse,deleteById}