import bcrypt from 'bcrypt';
import UserModel from '../models/usermodel.js';

export const registerUser = async (req, res) => {
    console.log("Request Body:", req.body);

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: name, email, or password.",
            });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already in use." });
        }

        // Save password as plain text (Not Recommended for Production)
        const newUser = new UserModel({ name, email, password });
        await newUser.save();

        res.status(201).json({ success: true, message: "User registered successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
    }
};



export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Missing email or password." });
        }

        // Find user in the database
        const user = await UserModel.findOne({ email });

        // Debugging: Log user details
        console.log("User Found:", user);

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password." });
        }

        // Debugging: Log stored hashed password
        console.log("Stored Hashed Password:", user.password);

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        // Debugging: Log password comparison result
        console.log("Password Match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password." });
        }

        res.status(200).json({ success: true, message: "Login successful." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
    }
};
