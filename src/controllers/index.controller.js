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
};

const createBar = async (req, res) => {
    const { weight_bar,
            weighing_date,
            epoxi,
            pu,
            repainting } = req.body;

    const response = await pool.query(
        'INSERT INTO bars (weight_bar, weighing_date, epoxi, pu, repainting) VALUES ($1, $2, $3, $4, $5)',
        [weight_bar, weighing_date, epoxi, pu, repainting]
    );
    console.log(response);
    res.json({
        message: 'Bar Added Sucessfully',
        body: {
            bar: {weight_bar, weighing_date, epoxi, pu, repainting}
        }
    });
};

module.exports = {
    getBars,
    createBar
}