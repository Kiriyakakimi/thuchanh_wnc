import express from 'express'
const getAboutPage = (req, res) => {
    res.render("about",{data:{title:"Về Tôi",content:"Trang của Tôi"},session:req.session})
}
export default getAboutPage