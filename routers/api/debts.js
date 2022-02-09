const express = require("express");
const router = express.Router();
const {
  listDebts,
  itemDebtById,
  addDebts,
  editDebt,
  deleteDebts,
} = require("../../model/index");

router.get("/", async (req, res, next) => {
  try {
    const list = await listDebts();
    res.json({
      status: "success",
      code: 200,
      data: { list },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:debtId", async (req, res, next) => {
  try {
    const itm = await itemDebtById(req.params.debtId);
    if (itm) {
      res.json({
        status: "success",
        code: 200,
        data: { itm },
      });
    } else {
      res.json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const list = await addDebts(req.body);
    res.json({
      status: "success",
      code: 201,
      data: { list },
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:debtId", async (req, res, next) => {
  try {
    const itm = await editDebt(req.params.debtId, req.body);
    if (itm) {
      return res.json({
        status: "success",
        code: 200,
        data: {
          itm,
        },
      });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:debtId", async (req, res, next) => {
  try {
    const itm = await deleteDebts(req.params.debtId);
    if (itm) {
      return res.json({
        status: "success",
        code: 200,
        message: "contact deleted",
        data: {
          itm,
        },
      });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }
  } catch (e) {
    next(e);
  }
});
module.exports = router;
