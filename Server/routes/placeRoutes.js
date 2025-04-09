// // import express from 'express';
// // import { addPlace, getPlaces } from './controllers/placesController.js';

// // const router = express.Router();

// // // POST /api/places - Add a new place
// // router.post('/', addPlace);

// // // GET /api/places - Get all places
// // router.get('/', getPlaces);

// // export default router;
// import express from 'express';
// import { addPlace, getPlaces } from '../controllers/placeController.js';

// const router = express.Router();

// router.post('/places', addPlace);
// router.get('/places', getPlaces);

// export default router;
import express from 'express';
import { addPlace, getPlaces } from '../controllers/placesControllers.js';

const router = express.Router();

router.post('/', addPlace);
router.get('/', getPlaces);

export default router;