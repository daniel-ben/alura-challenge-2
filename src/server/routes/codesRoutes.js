import express from "express";
import CodesController from "../controllers/codesController.js";

const router = express.Router();

router
    .get("/codes", CodesController.getAllCodes)
    .get("/codes/:id", CodesController.getCodeById)
    .post("/codes", CodesController.addNewCode)
    .put("/codes/:id", CodesController.updateCode)
    .delete("/codes/:id", CodesController.deleteCode);

export default router;

// {
//     "author": {
//       "username": "Daniel Ben",
//       "photourl": "https://github.com/daniel-ben.png?size=32",
//     },
//     "code": "def findGCD(big_num, small_num):\n\n    if big_num < small_num:\n        big_num, small_num = small_num, big_num\n    \n    if small_num == 0:\n        return big_num\n    elif big_num % small_num == 0:\n        return small_num\n    else:\n        return findGCD(small_num, big_num % small_num)",
//     "color": "#d2991e",
//     "comments": [],
//     "description": "Returns the greater common divider between two numbers",
//     "isliked": false,
//     "language": "Python",
//     "likes": 0,
//     "title": "Euclide's algorithm .py",
//   }