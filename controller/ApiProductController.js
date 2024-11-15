import express from 'express'
import Product from '../model/productModel'

const getAllProducts = async(req, res) => {
    let allproduct = await Product.getAllProducts()
    return res.json(allproduct)
}

const getProductDetails = async(req, res) => {
    let productdetail = await Product.getProductDetails(req.params.masp)
    return res.json(productdetail)
}

const getProductsByGroup = async(req, res) => {
    let groupproduct = await Product.getProductsByGroup(req.params.idnhom)
    return res.json(groupproduct)
}
const getAllGroups = async(req, res) => {
    let allgroup = await Product.getAllGroups()
    return res.json(allgroup)
}

export default {
    getAllProducts,
    getProductDetails,
    getProductsByGroup,
    getAllGroups
}   