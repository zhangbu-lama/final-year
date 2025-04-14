import Booking from '../models/bookingModel.js';
import TrekkingPackage from '../models/packageModel.js';

export const bookTrekkingPackage = async (req, res) => {
    try {
        const { packageId, userId, numberOfPeople, additionalRequests } = req.body;

        // Validate required fields
        if (!packageId || !userId || !numberOfPeople) {
            return res.status(400).json({ success: false, message: "Missing required fields." });
        }

        // Check if trekking package exists
        const trekkingPackage = await TrekkingPackage.findById(packageId);
        if (!trekkingPackage) {
            return res.status(404).json({ success: false, message: "Trekking package not found." });
        }

        // Calculate total price
        const totalPrice = trekkingPackage.price * numberOfPeople;

        // Create booking entry
        const newBooking = new Booking({
            packageId,
            userId,
            numberOfPeople,
            totalPrice,
            additionalRequests
        });

        await newBooking.save();

        res.status(201).json({
            success: true,
            message: "Booking successful!",
            booking: newBooking
        });
    } catch (error) {
        console.error("Error booking trekking package:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while booking the trekking package.",
            error: error.message
        });
    }
};
