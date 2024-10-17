import express from 'express'
import userModel from '../model/userModel'
const getAllUser =  async (req, res) => {
    let userList = await userModel.getAllUser()
    res.render("user",{data:{title:"Danh sách người dùng",page:'listUser',rows:userList}})
}
export default {getAllUser}
