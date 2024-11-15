import productModel from '../model/productModel';

const getAllProducts = async (req, res) => {
    const product = await productModel.getAllProducts();
    const group = await productModel.getAllGroups();
    res.render("product", { data: { title: "Danh sách sản phẩm", page: 'listUser', rows: product, group: group } ,session: req.session})
};

const getProductDetails = async (req, res) => {
    const { masp } = req.params;
    const product = await productModel.getProductDetails(masp);
    res.render("productdetail", { data: { title: "Chi tiết sản phẩm", rows: product }, session: req.session });
};

const getProductsByGroup = async (req, res) => {
    const { idnhom } = req.query; 
    const product = await productModel.getProductsByGroup(idnhom);
    const group = await productModel.getAllGroups(); 
    res.render("product", { data: { title: "Danh sách sản phẩm", page: 'listUser', rows: product, group: group }, session: req.session });
};

const getAllGroups = async (req, res) => {
    const group = await productModel.getAllGroups();
    return group;
};


export default { getAllGroups,getAllProducts, getProductDetails, getProductsByGroup };   