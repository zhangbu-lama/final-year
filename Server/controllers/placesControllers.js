import Place from '../models/placeModel.js';

// Add a new place (POST)
export const addPlace = async (req, res) => {
  const { name, description, latitude, longitude } = req.body;

  // Validation
  if (!name || !description || !latitude || !longitude) {
    return res.status(400).json({ message: 'All fields (name, description, latitude, longitude) are required' });
  }

  try {
    const newPlace = new Place({
      name,
      description,
      latitude,
      longitude,
    });
    await newPlace.save();
    res.status(201).json({ message: 'Place added successfully', data: newPlace });
  } catch (error) {
    console.error('Error adding place:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all places (GET)
export const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    console.error('Error fetching places:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};