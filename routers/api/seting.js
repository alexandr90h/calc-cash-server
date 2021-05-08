const express = require("express");
const router = express.Router();
const { addSetings, listSetings } = require("../../model/index");
const validate = require("./validation");
router.get("/", async (req, res, next) => {
  try {
    const list = await listSetings();
    // console.log("listSetings", list);
    res.json({
      status: "success",
      code: 200,
      data: { list },
    });
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  id = "60950be047618a42eec21789";
  try {
    const seting = await addSetings(id, req.body);
    res.json({
      status: "success",
      code: 201,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
