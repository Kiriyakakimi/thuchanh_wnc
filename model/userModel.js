import pool from '../connectDB'
const getAllUser = async () => {
    const [rows,fields] = await pool.execute('SELECT * FROM `user`')
    return rows
}    
export default getAllUser