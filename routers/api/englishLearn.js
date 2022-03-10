const express = require("express");
const TranslationScheme = require("../../model/schemas/translations-scheme");
const router = express.Router();

router.post("/addItem", async (req, res, next) => {
    try {
        console.log("================================", req.body);
        const results = await TranslationScheme.create(req.body);
        res.json({
            status: "success",
            code: 200,
            data: results,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});
router.get("/getItems", async (req, res, next) => {
    try {
        const results = await TranslationScheme.find();
        if (results) {
            res.json({
                status: "success",
                code: 200,
                results,
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
});
module.exports = router;