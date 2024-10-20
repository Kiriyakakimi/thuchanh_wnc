import express from 'express'
import userModel from '../model/userModel'
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
    await userModel.insertUser(username, password,fullname, address, sex, email)
    res.redirect('/user/')
}
export default { createUser, addUser, detailUser, getAllUser, editUser, updateUser, deleteUser }
