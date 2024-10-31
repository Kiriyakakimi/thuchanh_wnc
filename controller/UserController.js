import express from 'express'
import userModel from '../model/userModel'
import bcrypt from 'bcrypt';
const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser()
    res.render("listUser", { data: { title: "Danh sách người dùng", page: 'listUser', rows: userList } })
}
const detailUser = async (req, res) => {
    let user = req.params.username
    let dataUser = await userModel.detailUser(user)
    res.render("detailUser", { data: { title: "Chi tiết người dùng", page: 'detailUser', rows: dataUser } })
}
const editUser = async (req, res) => {
    let user = req.params.username
    let dataUser = await userModel.detailUser(user)
    res.render("editUser", { data: { title: "Chỉnh sửa người dùng", page: 'editUser', rows: dataUser } })
}
const updateUser = async (req, res) => {
    console.log(req.body)
    let { username, fullname, address, sex, email } = req.body
    await userModel.updateUser(username, fullname, address, sex, email)
    res.redirect('/user/')
}
const deleteUser = async (req, res) => {
    let { username } = req.body
    await userModel.deleteUser(username)
    res.redirect('/user/')
}
const addUser = async (req, res) => {
    res.render("addUser", { data: { title: "Thêm người dùng", page: 'addUser' } })
}
const createUser = async (req, res) => {
    console.log(req.body)
    let { username, password, fullname, address, sex, email } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.insertUser(username, hashedPassword,fullname, address, sex, email)
    res.redirect('/user/')
}
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.getUserByUsername(username);
        if (!user) {
            res.status(404).send('User not found');
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            req.session.user = { username: user.username }; 
            res.redirect('/');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
export default { createUser, addUser, detailUser, getAllUser, editUser, updateUser, deleteUser, loginUser }

