import express from 'express'
const getHomePage = (req, res) => {
    res.render("home", {
        session: req.session
    })
}
export default getHomePage
