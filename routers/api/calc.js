const express = require("express");
const router = express.Router();
const { listCash, addCash } = require("../../model/index");
const validate = require("./validation");

router.get("/", async (_req, res, next) => {
  try {
    const list = await listCash();
    console.log("list:", list);
    res.json({
      status: "success",
      code: 200,
      data: { list },
    });
  } catch (error) {
    next(error);
  }
});

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const contact = await getContactById(req.params.contactId);
//     if (contact) {
//       res.json({
//         status: "success",
//         code: 200,
//         data: { contact },
//       });
//     } else {
//       res.json({
//         status: "error",
//         code: 404,
//         message: "Not found",
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/", validate.addCash, async (req, res, next) => {
  try {
    const cash = await addCash(req.body);
    res.json({
      status: "success",
      code: 201,
      data: { cash },
    });
  } catch (error) {
    next(error);
  }
});

// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const contact = await removeContact(req.params.contactId);
//     if (contact) {
//       return res.json({
//         status: "success",
//         code: 200,
//         message: "contact deleted",
//         data: {
//           contact,
//         },
//       });
//     } else {
//       return res.status(404).json({
//         status: "error",
//         code: 404,
//         message: "Not found",
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

// router.patch("/:id", validate.updateContact, async (req, res, next) => {
//   try {
//     const contact = await updateContact(req.params.id, req.body);
//     if (contact) {
//       return res.json({
//         status: "success",
//         code: 200,
//         data: {
//           contact,
//         },
//       });
//     } else {
//       return res.status(404).json({
//         status: "error",
//         code: 404,
//         message: "Not found",
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
