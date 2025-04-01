import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../db/prisma.js";

interface DecodedToken extends JwtPayload {
	userId: string;
}

// This is a TypeScript declaration merging. It allows us to add new properties
// to existing interfaces. In this case, we are adding a new property `user`
// to the `Request` interface of the `Express` namespace. This is useful for
// attaching user information to the request object after authentication.
declare global {
	namespace Express {
		export interface Request {
			user: {
				id: string;
			};
		}
	}
}

// This function is used to protect routes by checking if the user is authenticated
// and has a valid JWT token. If the token is valid, it retrieves the user information
// from the database and attaches it to the request object. If the token is invalid
// or expired, it sends a 401 Unauthorized response.
const protectRoute = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
		const token = req.cookies.jwt;
		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No token provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await prisma.user.findUnique({
			where: { id: decoded.userId },
			select: { id: true, username: true, fullName: true, profilePic: true },
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;
		next();

	} catch (error: any) {
		console.log("Error in protectRoute middleware", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export default protectRoute;