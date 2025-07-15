import jwt from "jsonwebtoken";
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            res.status(400).json({
                error: "Unauthorized - Invalid Token"
            });
            return;
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            res.status(400).json({
                error: "Unauthorized - Invalid Token"
            });
            return;
        }
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        console.log("Error in middleware route");
        res.status(400).json({
            error: "Internal server error"
        });
    }
};
