const bcrypt = require('bcrypt');
const UserModel = require('../Models/user');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

         
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

       
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
        
        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: 'Auth failed: Email is incorrect', success: false });
        }

        // Compare the password
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: 'Auth failed: Password is incorrect', success: false });
        }

        // Generate a JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id, role: user.role }, 
            process.env.JWT_SECRET,
            { expiresIn: '24h' } // Token will expire in 24 hours
        );

        // Send a response with the JWT token
        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,  // This token will be stored on the frontend (in localStorage)
            email,     // Send user details for the frontend to use
            name: user.name,
            role: user.role,
            _id: user._id
        });

    } catch (err) {
        console.error('Login error:', err);
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