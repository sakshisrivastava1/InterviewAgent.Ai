import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        console.log("COOKIES RECEIVED:", req.cookies);

        const { token } = req.cookies;

        if (!token) {
            console.log("❌ NO TOKEN");

            return res.status(400).json({
                message: "user does not have a token"
            });
        }

        console.log("✅ TOKEN RECEIVED");

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("✅ TOKEN VERIFIED:", verifyToken);

        req.userId = verifyToken.userId;

        next();

    } catch (error) {
        console.log("❌ AUTH ERROR:", error);

        return res.status(500).json({
            message: `isAuth error ${error.message}`
        });
    }
};
export default isAuth
