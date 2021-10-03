
import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"


const getSenatorial=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('SenatorialDis');
        const data = await pool.request().query(sqlQueries.list);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}
const storeSenatorial = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('SenatorialDis');
        const insertPost = await pool.request()
            .input('SDName', sql.NVarChar(150), data.SDName)
            .input('Created', sql.DateTime, data.Created)
            .query(sqlQueries.createSenatorial);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateSenatorial = async (data,id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('SenatorialDis');
        const insertPost = await pool.request()
            .input('id', sql.Int, id)
            .input('SDName', sql.NVarChar(150), data.SDName)
            .input('Created', sql.DateTime, data.Created)
            .query(sqlQueries.createSenatorial);
        return insertPost.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('SenatorialDis')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.deleteSenatorial)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}
const getSenatorialById = async (Id) => {
    try {
    const pool = await sql.connect(config.sql)
    const sqlQueries = await utils.loadSqlQueries('SenatorialDis')
    const post = await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.senatorialById)
    return post.recordset
    } catch (error) {
        return error.message;
    }
}

export default {getSenatorial,storeSenatorial,updateSenatorial,deleteById,getSenatorialById}