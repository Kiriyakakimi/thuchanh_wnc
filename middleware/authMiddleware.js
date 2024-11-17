import jwt from 'jsonwebtoken';

const secretKey = 'secret';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Không tìm thấy token xác thực' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        if (!decoded.username) {
            return res.status(403).json({ 
                message: 'Token không chứa thông tin người dùng' 
            });
        }
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Lỗi xác thực token:', err.message);
        return res.status(403).json({ 
            message: 'Token không hợp lệ hoặc đã hết hạn' 
        });
    }
};

export default authenticateToken;     