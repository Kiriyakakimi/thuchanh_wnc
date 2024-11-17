import express from 'express'
import userModel from '../model/userModel'
const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser()
    return res.json(userList)
}
const detailUser = async (req, res) => {
    let user = req.params.username
    let dataUser = await userModel.detailUser(user)
    return res.json(dataUser)
}
const editUser = async (req, res) => {
    let user = req.params.username
    let dataUser = await userModel.detailUser(user)
    return res.json(dataUser)
}
const updateUser = async (req, res) => {
    console.log(req.body)
    let { username, fullname, address, sex, email } = req.body
    await userModel.updateUser(username, fullname, address, sex, email)
    return res.json({message:"success"})
}
const deleteUser = async (req, res) => {
    let { username } = req.body
    await userModel.deleteUser(username)
    return res.json({message:"success"})
}
const addUser = async (req, res) => {
    return res.json({message:"success"})
}
const createUser = async (req, res) => {
    console.log(req.body)
    let { username, password, fullname, address, sex, email } = req.body
    const hashedPassword = await userModel.hashPassword(password)
    await userModel.insertUser(username, hashedPassword,fullname, address, sex, email)
    return res.json({message:"success"})
}
const getUserInfor = async (req, res) => {
    try {
        // Lấy username từ token đã được xác thực
        const username = req.user?.username;
        
        if (!username) {
            return res.status(400).json({
                message: 'Không tìm thấy thông tin người dùng trong token'
            });
        }

        const user = await userModel.getUserByUsername(username);
        
        if (!user) {
            return res.status(404).json({
                message: 'Không tìm thấy thông tin người dùng'
            });
        }

        // Loại bỏ password trước khi gửi về client
        const { password, ...userInfo } = user;
        return res.status(200).json(userInfo);
    } catch (error) {
        return res.status(500).json();
    }
};
export default { getUserInfor, getAllUser, detailUser, editUser, updateUser, deleteUser, addUser, createUser }
  