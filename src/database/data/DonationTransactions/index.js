'use strict';

import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "mssql"

const getDonationTransactions = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('DonationTransactions');
        const posts = await pool.request().query(sqlQueries.list);
        return posts.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
export default {getDonationTransactions}