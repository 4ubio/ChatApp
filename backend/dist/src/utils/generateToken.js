import jwt from 'jsonwebtoken';
const generateToken = (userId) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is missing");
    }
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d", });
    return token;
};
export default generateToken;
