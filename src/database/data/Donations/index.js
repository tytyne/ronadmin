'use strict';

import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const getDonations = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Donations');
        const posts = await pool.request().query(sqlQueries.list);
        return posts.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getTotal= async()=>{
    try{
        let pool=await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("Donations");
        const posts = await pool.request().query(sqlQueries.total);
        return posts.recordset;
    }
    catch (error) {
        console.log(error.message);
    }
   
}

const getPending= async()=>{
    try{
        let pool=await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries("Donations");
        const posts = await pool.request().query(sqlQueries.pending);
        return posts.recordset;
    }
    catch (error) {
        console.log(error.message);
    }
   
}
export default {getDonations,getTotal,getPending}