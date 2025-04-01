import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'TrekkingPackage', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookingDate: { type: Date, default: Date.now },
  numberOfPeople: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
  additionalRequests: { type: String }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
