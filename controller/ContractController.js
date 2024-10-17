import express from 'express'
const getContractPage = (req, res) => {
    res.render("contract",{data:{title:"Giấy Phép",content:"Trang của Tôi"}})
}
export default getContractPage