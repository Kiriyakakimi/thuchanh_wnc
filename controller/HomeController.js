import express from 'express'
const getHomePage = (req, res) => {
    res.render("home")
}
export default getHomePage
