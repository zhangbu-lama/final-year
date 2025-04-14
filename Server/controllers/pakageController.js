
// import TrekkingPackage from '../models/packageModel.js';
// export const addTrekkingPackage = async (req, res) => {
//     try {
//         const { 
//             title, description, price, daysRequired, 
//             rating, difficultyLevel, maxGroupSize, bestSeason, 
//             includedServices, excludedServices, location 
//         } = req.body;
        
//         // Validate required fields
//         if (!title || !description || !price || !daysRequired || 
//             !difficultyLevel || !maxGroupSize || !bestSeason || !location) {
//             return res.status(400).json({ success: false, message: "Missing required fields." });
//         }

//         // Ensure includedServices and excludedServices are arrays
//         const trekkingPackageData = {
//             title,
//             description,
//             price,
//             daysRequired,
//             rating: rating || 0,
//             difficultyLevel,
//             maxGroupSize,
//             bestSeason,
//             includedServices: Array.isArray(includedServices) ? includedServices : [],
//             excludedServices: Array.isArray(excludedServices) ? excludedServices : [],
//             location,
//         };

//         const newTrekkingPackage = new TrekkingPackage(trekkingPackageData);
//         await newTrekkingPackage.save();

//         res.status(201).json({
//             success: true,
//             message: "Trekking package added successfully.",
//             trekkingPackage: newTrekkingPackage
//         });
//     } catch (error) {
//         console.error("Error adding trekking package:", error);
//         res.status(500).json({
//             success: false,
//             message: "An error occurred while adding the trekking package.",
//             error: error.message
//         });
//     }
// };

// export const getAllTrekkingPackages = async (req, res) => {
//     try {
//       // Assuming you have a TrekkingPackage model
//       const packages = await TrekkingPackage.find({});
      
//       res.status(200).json({
//         success: true,
//         count: packages.length,
//         packages
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: "Failed to fetch trekking packages",
//         error: error.message
//       });
//     }
//   };

import TrekkingPackage from '../models/packageModel.js';
import mongoose from 'mongoose';

// Add a trekking package
export const addTrekkingPackage = async (req, res) => {
  try {
    const { 
      title, description, price, daysRequired, 
      rating, difficultyLevel, maxGroupSize, bestSeason, 
      includedServices, excludedServices, location 
    } = req.body;
    
    // Validate required fields
    if (!title || !description || !price || !daysRequired || 
        !difficultyLevel || !maxGroupSize || !bestSeason || !location) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // Ensure includedServices and excludedServices are arrays
    const trekkingPackageData = {
      title,
      description,
      price,
      daysRequired,
      rating: rating || 0,
      difficultyLevel,
      maxGroupSize,
      bestSeason,
      includedServices: Array.isArray(includedServices) ? includedServices : [],
      excludedServices: Array.isArray(excludedServices) ? excludedServices : [],
      location,
    };

    const newTrekkingPackage = new TrekkingPackage(trekkingPackageData);
    await newTrekkingPackage.save();

    res.status(201).json({
      success: true,
      message: "Trekking package added successfully.",
      trekkingPackage: newTrekkingPackage
    });
  } catch (error) {
    console.error("Error adding trekking package:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the trekking package.",
      error: error.message
    });
  }
};

// Get all trekking packages
export const getAllTrekkingPackages = async (req, res) => {
  try {
    const packages = await TrekkingPackage.find({});
    
    res.status(200).json({
      success: true,
      count: packages.length,
      packages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch trekking packages",
      error: error.message
    });
  }
};

// Delete a trekking package by ID
export const deleteTrekkingPackage = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid package ID format"
      });
    }

    const result = await TrekkingPackage.deleteOne({ 
      _id: new mongoose.Types.ObjectId(id) 
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Package not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Package deleted successfully"
    });

  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete package",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};