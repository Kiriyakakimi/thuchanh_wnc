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
export default { createUser, addUser, detailUser, getAllUser, editUser, updateUser, deleteUser }
