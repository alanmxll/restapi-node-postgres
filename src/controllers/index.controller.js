const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Surturrising@2011',
    database: 'firstapi',
    port: '5432',

})

const getBars = async (req, res) => {
    const response = await pool.query('SELECT * FROM bars');
    res.status(200).json(response.rows);
}

module.exports = {
    getBars
}