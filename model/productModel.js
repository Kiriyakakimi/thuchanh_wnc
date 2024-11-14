import pool from '../connectDB';

const getAllProducts = async () => {
  const [rows] = await pool.execute('SELECT * FROM `sanpham`');
  return rows;
};
const getAllGroups = async () => {
  const [rows] = await pool.execute('SELECT * FROM `nhom`'); 
  return rows;
};

const getProductsByGroup = async (idnhom) => {
  const [rows] = await pool.execute('SELECT * FROM `sanpham` WHERE idnhom = ?', [idnhom]);
  return rows;
};

export default { getAllGroups,getAllProducts, getProductsByGroup };   