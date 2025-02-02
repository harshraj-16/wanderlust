const express = require("express");
const router = express.Router({mergeParams: true});
const ExpressError = require("../Utils/ExpressError.js");
const wrapAsync = require("../Utils/wrapAsync.js");
const { reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
    validateReview,
    isLoggedIn,
    isReviewAuthor
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


// const validateReview = (req,res,next) => {
//     let {error} = reviewSchema.validate(req.body);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400,errMsg);
//     }else {
//         next();
//     }
// };

// Reviews
// post Route

router.post("/",
isLoggedIn,reviewController.createReview);

// Delete Review Route
router.delete("/:reviewID",
isLoggedIn,
isReviewAuthor,reviewController.destroyReview);


module.exports = router;