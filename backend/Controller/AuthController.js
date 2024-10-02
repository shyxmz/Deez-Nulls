const bcrypt = require('bcrypt');
const UserModel = require('../Models/user');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        // Ensure the role is one of the allowed values
        if (!['startup', 'EIR', 'admin'].includes(role)) {
            return res.status(400).json({
                message: 'Invalid role specified',
                success: false
            });
        }
 
        const userModel = new UserModel({ name, email, password, role });
 
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
 
        res.status(201).json({
            message: "Signup successful",
            success: true
        });

    } catch (err) {
        console.error('Error during signup:', err.message || err);
        res.status(500).json({
            message: "Internal server error",
            success: false 
        });
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: 'Auth failed: Email is incorrect', success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: 'Auth failed: Password is incorrect', success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id, role: user.role }, 
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successfully",
            success: true,
            jwtToken, 
            email,
            name: user.name,
            role: user.role 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false 
        });
    }
};

module.exports = {
    signup,
    login
};