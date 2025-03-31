import jwt from 'jsonwebtoken';
import { Response } from 'express';

const generateToken = (userId: string, res: Response) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET!, {
        expiresIn: "15d",
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true, //Prevens XSS cors site script attacks
        sameSite: "strict", //Prevens CSRF cross site request forgery
        secure: process.env.NODE_ENV !== "development", //Only send cookie over HTTPS in production
    });
    return token;
};

export default generateToken;