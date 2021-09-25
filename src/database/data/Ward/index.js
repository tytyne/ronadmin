
import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getWards=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Ward');
        const data = await pool.request().query(sqlQueries.WardList);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}


const storeWard = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Ward');
        const insertPost = await pool.request()
            .input('WardName', sql.NVarChar(250), data.WardName)
            .input('Lga', sql.Int, data.Lga)
            .input('DateCreated', sql.Datetime, data.DateCreated)
            .input('DateUpdated', sql.DateTime, data.DateUpdated)
            
            .query(sqlQueries.createWard);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('Ward')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteWard)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
export default {getWards,storeWard,deleteById}