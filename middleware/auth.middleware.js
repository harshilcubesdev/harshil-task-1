const jwt = require('jsonwebtoken');
accessskey='@£$%^&*'

const verifyToken = async (req, res, next) => {

    try {
        const token = req.header("authorization")?.replace("Bearer ", "")

        if (!token) {
            return res.status(400).send({ message: "Invalid use of bearer auth token" });
        }
    
        const user = jwt.verify(token, accessskey);
        if (!user) {
            return res.status(401).send({  message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error',
        });
}
};

module.exports = verifyToken;