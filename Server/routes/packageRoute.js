
// import express from "express";
// import { addTrekkingPackage } from '../controllers/pakageController.js'

// const router = express.Router();

// router.post("/add-trekking-package", addTrekkingPackage);


// export default router;
import express from "express";
import { addTrekkingPackage, getAllTrekkingPackages, deleteTrekkingPackage} from '../controllers/pakageController.js';

const router = express.Router();

router.post("/add-trekking-package", addTrekkingPackage);
router.get("/trekking-packages", getAllTrekkingPackages);
router.delete("/trekking-packages/:id", deleteTrekkingPackage);
export default router;