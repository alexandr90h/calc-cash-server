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
        next(error);
    }
});
module.exports = router;