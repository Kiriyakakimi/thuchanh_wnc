import pool from '../connectDB'
const  getAllUser= async () => {
    const [rows,fields] = await pool.execute('SELECT * FROM `users`')
    return rows
}
const detailUser = async (user) => {
    const [rows,fields] = await pool.execute('SELECT * FROM `users` WHERE username = ?',[user])
    return rows[0]
}
const updateUser = async (username, fullname, address,sex,email) => {
    await pool.execute('UPDATE `users` SET `fullname`= ?,`address`= ?,`sex`= ?,`email`= ? WHERE `username` = ?',[fullname,address,sex,email,username])
}
const deleteUser = async (username) => {
    await pool.execute('DELETE FROM `users` WHERE `username` = ?',[username])
}
const insertUser = async (username, password, fullname, address,sex,email, role =1 ) => {
    await pool.execute('INSERT INTO `users`(`username`, `password`, `fullname`, `address`, `sex`, `email`,`role`) VALUES (?,?,?,?,?,?,?)',[username, password, fullname, address,sex,email,role])
}
const getUserByUsername = async (username) => {
    const [user] = await pool.execute('SELECT * FROM `users` WHERE username = ?',[username])
    return user[0]
};
export default {getUserByUsername,insertUser,getAllUser,detailUser,updateUser,deleteUser}
